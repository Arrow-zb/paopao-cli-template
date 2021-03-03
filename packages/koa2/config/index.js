const config = {
  PORT: 6092,
  DB: {                           
    database: 'arrow',
    user: 'root',
    password: '123456',
    options: {
      host: '10.12.6.144', 
      dialect: 'mysql',
      port: '3309',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define: {
        timestamps: false, // 默认不加时间戳
        freezeTableName: false, // 表名默认加 s
        charset: 'utf8',
        dialectOptions: {
          collate: 'utf8_general_ci'
        },
      },
      timezone: '+08:00'
    }
  }
}

module.exports = config
