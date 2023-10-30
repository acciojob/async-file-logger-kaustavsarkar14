//your JS code here. If required.
const fileNames = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
];

// do not change the code above
// add your code here

async function getData(filename, i){
	fetch(filename)
	.then(data=>data.text())
	.then(data=>{
		// data = JSON.parse(data)
		console.log(`File ${i+1}: This content is from file ${i+1}`)
	})
}
fileNames.forEach((el,i)=>{
	getData(el,i)
})


