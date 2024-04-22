module.exports ={
    apps:[
        {
            name:'gurunanakWebsite',
            script:'server.js',
            instances:1,
            watch:true,
            autorestart:true,
            max_memory_restart:'1G',
        }
    ]
}