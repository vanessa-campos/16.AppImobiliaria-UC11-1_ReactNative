import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true); 
SQLite.enablePromise(true);

const database_name = "imoveis.db"; 
const database_version = "1.0"; 
const database_displayname = "Anuncio de Imoveis";
const database_size = 100000;
                              
export default class Database{

    Conectar(){  
        let db;
        return new Promise((resolve) => {    
            console.log("Checando a integridade do plugin ...");           
            SQLite.echoTest().then(() => {        
                console.log("Integridade Ok ...");        
                console.log("Abrindo Banco de Dados ...");        
                SQLite.openDatabase(database_name, database_version, database_displayname, database_size).then(DB => {
                        db = DB;            
                        console.log("Banco de dados Aberto");            
                        db.executeSql('SELECT 1 FROM Anuncios LIMIT 1').then(() => {
                            console.log("O banco de dados está pronto ... Executando Consulta SQL ...");                            
                        }).catch((error) =>{
                            console.log("Erro Recebido: ", error);
                            console.log("O Banco de dados não está pronto ... Criando Dados");
                            db.transaction((tx) => {
                                tx.executeSql('CREATE TABLE IF NOT EXISTS Anuncios (id INTEGER PRIMARY KEY AUTOINCREMENT, Titulo VARCHAR(100), Endereco VARCHAR(100), Finalidade VARCHAR(30), Tipo VARCHAR(30), Valor VARCHAR(20), Imagem TEXT )');
                            }).then(() => {
                                console.log("Tabela criada com Sucesso");                
                            }).catch(error => {                    
                                console.log(error);                
                            });            
                        });    
                    resolve(db);          
                }).catch(error => {           
                    console.log(error);          
                });      
            }).catch(error => {        
                console.log("echoTest Falhou - plugin não funcional");      
            });    
        }); 
    };

    Desconectar(db) {  
        if (db) {    
            console.log("Fechando Banco de Dados");    
            db.close().then(status => {        
                console.log("Banco de dados Desconectado!!");      
            }).catch(error => {        
                this.errorCB(error);      
            });  
        } else {    
            console.log("A conexão com o banco não está aberta");  
        } 
    };
         
    InserirAnuncio(anuncio) {  
        return new Promise((resolve) => {    
            this.Conectar().then((db) => {      
                db.transaction((tx) => {      
                    tx.executeSql('INSERT INTO Anuncios(Titulo, Endereco, Finalidade, Tipo, Valor, Imagem) VALUES (?, ?, ?, ?, ?, ?)', [anuncio.Titulo, anuncio.Endereco, anuncio.Finalidade, anuncio.Tipo, anuncio.Valor, anuncio.Imagem]).then(([tx, results]) => { 
                        resolve(results);        
                    });      
                }).then((result) => {        
                    this.Desconectar(db);      
                }).catch((err) => {        
                    console.log(err);      
                });    
            }).catch((err) => {      
                console.log(err);    
            });  
        });  
    }

    InserirImagem(anuncio) {  
        return new Promise((resolve) => {    
            this.Conectar().then((db) => {      
                db.transaction((tx) => {      
                    tx.executeSql('INSERT INTO Anuncios(Imagem) VALUES (?)', [anuncio.Imagem]).then(([tx, results]) => { 
                        resolve(results);        
                    });      
                }).then((result) => {        
                    this.Desconectar(db);      
                }).catch((err) => {        
                    console.log(err);      
                });    
            }).catch((err) => {      
                console.log(err);    
            });  
        });  
    }

    ListarAnuncios() {  
        return new Promise((resolve) => {    
            const listaAnuncios = [];    
            this.Conectar().then((db) => {      
                db.transaction((tx) => {     
                    //Query SQL para listar os dados da tabela   
                    tx.executeSql('SELECT * FROM Anuncios', []).then(([tx,results]) => {          
                    console.log("Consulta completa");          
                    var len = results.rows.length;          
                    for (let i = 0; i < len; i++) {            
                        let row = results.rows.item(i);            
                        const { id, Titulo, Endereco, Finalidade, Tipo, Valor, Imagem } = row;
                        listaAnuncios.push({id, Titulo, Endereco, Finalidade, Tipo, Valor, Imagem});
                    }
                    resolve(listaAnuncios);
                });
            }).then((result) => {
                this.Desconectar(db);
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    });
    }

    // EditarProduto(id) {  
    //     return new Promise((resolve) => {    
    //         this.Conectar().then((db) => {      
    //             db.transaction((tx) => {     
    //                 tx.executeSql("UPDATE Produto SET Categoria = ? UPDATE Produto SET Nome = ? UPDATE Produto SET Descricao = ? UPDATE Produto SET Tamanho = ? UPDATE Produto SET Valor = ? UPDATE Produto SET Unidade = ? UPDATE Produto SET Quantidade = ? WHERE id = ?", [id]).then(([tx, results]) => {          
    //                 resolve(results);        
    //             });      
    //         }).then((result) => {        
    //               this.Desconectar(db);      
    //             }).catch((err) => {        
    //               console.log(err);      
    //             });    
    //         }).catch((err) => {     
    //             console.log(err);    
    //         });  
    //     });  
    // }

    Deletar(id) {  
        return new Promise((resolve) => {    
            this.Conectar().then((db) => {      
                db.transaction((tx) => {    
                    tx.executeSql('DELETE FROM Anuncios WHERE id = ?', [id]).then(([tx, results]) => {          
                        console.log(results);          
                        resolve(results);        
                    });      
                }).then((result) => {        
                    this.Desconectar(db);      
                }).catch((err) => {        
                    console.log(err);      
                });    
            }).catch((err) => {      
                console.log(err);    
            });  
        });  
    }

}