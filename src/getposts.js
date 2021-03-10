const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, './content');
let postlist = [];

const getpost = () => {
	fs.readdir(dirPath, (error, files) => {
		if (error) {
			return console.log('faild to list files in the directory: ', error);
		}

		files.forEach((file, i) => {
			let obj = {};
			let post;
			fs.readFile(`${dirPath}/${file}`, 'utf8', (error, content) => {
				if (error) {
					console.log('faild to read the file', error);
				}
				const getMetaDataIndeces = (accumulator, element, i) => {
					if (/^---/.test(element)) {
						accumulator.push(i);
					}
					return accumulator;
				};
				const parseMetaData = ({ lines, metaDataIndeces }) => {
					if (metaDataIndeces.length > 0) {
						let metadata = lines.slice(metaDataIndeces[0] + 1, metaDataIndeces[1]);

						metadata.forEach((line) => {
							obj[line.split(': ')[0]] = line.split(': ')[1];
						});
						return obj;
					}
				};
				const parseContent = ({ lines, metaDataIndeces }) => {
					if (metaDataIndeces.length > 0) {
						let contents = lines.slice(metaDataIndeces[1] + 1, lines.length);
						return contents.join('\n');
					}
				};

				const lines = content.split('\n');
				const metaDataIndeces = lines.reduce(getMetaDataIndeces, []);
				const metadata = parseMetaData({ lines, metaDataIndeces });
				const contents = parseContent({ lines, metaDataIndeces });

				post = {
					id: i + 1,
					title: metadata.title,
					author: metadata.author,
					date: metadata.date,
					image: metadata.image,
					content: contents,
				};
				postlist.push(post);
				if (i === files.length - 1) {
					let data = JSON.stringify(postlist);
					fs.writeFileSync('./src/blogposts.json', data);
				}
			});
		});
	});
	return;
};
getpost();
