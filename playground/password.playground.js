const bcrypt= require('bcrypt');

module.exports ={
    encryptPassword:(myPlaintextPassword,callback)=>{
        const saltRounds=10;
        bcrypt.genSalt(saltRounds,(err,salt)=>{
            if(err) throw err;
            bcrypt.hash(myPlaintextPassword,salt,(nerr,hash)=>{
                if(nerr) throw nerr;
                console.log("Generated hash is ",hash);
            callback(hash);     
            })
        });
    },
    decryptPassword:(myPlaintextPassword,hashPassword,callback)=>{
        bcrypt.compare(myPlaintextPassword,hashPassword,(err,res)=>{
            if(err) throw err;
            callback(res);
        })
    },
    generatePassword:(callback)=>{
        var text="";
        var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(var i=0;i<8;i++)
        {
            text+=possible.charAt(Math.floor(Math.random()*possible.length));
        }
        callback(text);
    }
}


