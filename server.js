import { log } from 'console';
import http from 'http';
import url from 'url';
import fs from 'fs/promises';
import path from 'path';

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename,__dirname);




const server = http.createServer(async(req,res)=>{

    try {
        if(req.method === 'GET'){
            let filepath;
            if(req.url === '/'){
                filepath = path.join(__dirname, 'public', 'index.html');
            }else if(req.url === '/about'){
                filepath = path.join(__dirname, 'public', 'about.html');
            }else{
                throw new Error('Not found');
            }

            const data = await fs.readFile(filepath);
            res.setHeader('Content-Type','text/html');
            res.write(data);
            res.end();
        }else{
            throw new Error('method not allowed')
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
    }

    
    
});

server.listen(process.env.PORT, ()=>{
    console.log("server running on port 8080")
});