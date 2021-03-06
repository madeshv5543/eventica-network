/*jslint node: true */
"use strict";

exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.webPort = 4000;

exports.storage = 'sqlite';


exports.initial_witnesses = [
  '635NNZCKJABPMIT6CLWMTLV3VSOFX52V',
  'EHZOLTKTRTPKL2PPQGWZCQFZEWEEIVZE',
  'KDHL3OKHKG7GN6YGUH7PXCUU3OUZ6HQS'
];

/* testnet
exports.initial_witnesses = [
	'3HNHMZCCPINTBGJHDP6UAT53IB4WNAD2',
	'3PICZP4I4GVKW767CV3RKQXEXOIPHB7F',
	'A5ZRRMKHFBY35LPEII3H7DYVTQX3OSLE',
	'BW4X7A5FUALRVJMIPV5C6FUMFYSHSPVV',
	'F34S5JKFLXSBRFXWSULFIU4IGZAUFWZW',
	'JLS6RBASYAM5DF2ZZ6L2CHFEUMETW4UM',
	'LUGMHIRFQ5Y4JNFBMZ7EHFDRYECASCJU',
	'OD6FZRMAYVEE5YACRIFZSYFZXO4FUIL2',
	'Q7XMC3GXPWALIBMGYIDZQCNAINCFA5XX',
	'XMKZO4QD7Y2FD6CKVGV6MOJ7ALM2PMV4',
	'XVNA2DMK7P4TMFLVB6M5DSBC7Q4DLZBS',
	'XYEPISY7WPZWOO3TTOCPNW6IFCZI3CN2'
];
*/


exports.initial_peers = [
	'ws://127.0.0.1:6611'
];

exports.selectedLanguage = 'en';
exports.languagesAvailable = {
    en: {name: "English", file: "en"},
    da: {name: "Dansk", file: "explorer_da-DK"},
    zh: {name: "中文", file: "explorer_zh-CN"}
};

console.log('finished explorer conf');
