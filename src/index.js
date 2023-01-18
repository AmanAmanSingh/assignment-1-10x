const fs = require('fs/promises');

const myFileWriter = async () => {
	// write code here
	// dont chnage function name
	const filedata = await fs.writeFile("input.txt", "my name is Aman");

}
myFileWriter();

const myFileReader = async () => {
	// write code here
	// dont chnage function name
	let data1 = await fs.readFile("input.txt", "utf-8")
	console.log("line-15", data1);
}
myFileReader();

const myFileUpdater = async () => {
	// write code here
	// dont chnage function name
	await fs.appendFile("input.txt", " singh")
}
myFileUpdater();


const myFileDeleter = async () => {
	// write code here
	// dont chnage function name
	await fs.rm("input.txt")

}
// myFileDeleter();


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }