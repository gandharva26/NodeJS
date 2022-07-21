const request = require('request');
const Winrar = require('winrarjs')
const RarArchive = require('rarjs')
const axios = require('axios').default;
const _7z = require('7zip-min');
const appUrl = "http://dl-stage.pstmn.io/download/latest/osx"
const entUrl = "https://dl-stage.pstmn.io/download/latest/osx?channel=enterprise&filetype=pkg"
path = "/Users/gandharvadeshpande/Desktop/test"
const app = "/Users/gandharvadeshpande/Desktop/test/PostmanStage v9.22.2-stage01 for macOS (x64).zip"
const pkg = '/Users/gandharvadeshpande/Desktop/test/Postman-Enterprise-Stage-9.20.3-enterpriseStage02-x64.zip'
const decompress = require('decompress');
 
// decompress(pkg, 'dist').then(files => {
//     console.log('done!');
// });

// source = ""
// target = "/Users/gandharvadeshpande/Desktop/test"

//     await extract(source, { dir: target })
//     console.log('Extraction complete')
const { DownloaderHelper } = require('node-downloader-helper');
  
// URL of the image
const file = entUrl
// Path at which image will be downloaded
const filePath = path; 
  
const dl = new DownloaderHelper(file , filePath);
  
dl.on('end', () => console.log('Download Completed'))
dl.start();