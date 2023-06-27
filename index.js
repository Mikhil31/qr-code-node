//to enable ECMA, go to package.json and add "type"="module",

//packages: inquirer, qr-image
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    
    {
        "message":"enter url: ",
        "name":"URL"
    }
  ])
  .then((answers) => {
    //answers.URL: will give output to qr
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream('qrcode.png'));
   console.log("image created");
   
   fs.writeFile('msg.txt', answers.URL, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });

