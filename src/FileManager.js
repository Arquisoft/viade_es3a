

const auth = require('solid-auth-cli')
const FC   = require('solid-file-client')
const fc   = new FC( auth )


export async function  fileUpload (files){
      
        
        //if (!session) { session = await auth.login() }
        //console.log("Logged in as ${session.webId}")
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            const url ="https://carlosmenendez.solid.community/public/" + file.name
    
           // console.log("Uploading ${file.name} to ${url}")
            try {
                // Uploading the file
                // Content can be a file from a html input
                // or a string. For json objects, use JSON.stringify(object)
                const res = await fc.putFile(url, file, file.type)
                console.log("Bien"+res)
              
            } catch (err) {
                console.error(err)
                
            } 
        }
    };

   
      