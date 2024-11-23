import fs from 'fs';
// import fs from fs/promises;
import { promises } from 'dns';

//read file async callback
// fs.readFile('./text.txt','utf8', (err,data)=>{
//     if(err){
//         throw err;
//     };
//     console.log(data);
// });


// //sync version
// const data = fs.readFileSync('./text.txt','utf-8');
// console.log(data);

//readfile() - promise version .then()
// fs.readFile('./text.txt','utf-8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(error))

//readfile async await

const readfile = async ()=>{
    try {
        const data = await fs.readFileSync('./text.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

//writefile

const writefile = async () => {
    try {
        await fs.writeFileSync('./text.txt' , 'Hello im writing to this file and my name is karan');
        console.log("file written to");
    } catch (error) {
        console.log(error);
    }
}


//append file()
const appendFile = async ()=>{
    try {
        await fs.appendFileSync('./text.txt', '\nThis is appended text');
        console.log("file appended to");
    } catch (error) {
        console.log(error);
    }
}

writefile();
appendFile();
readfile();