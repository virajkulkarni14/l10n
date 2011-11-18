/**
 * Trasliteration regular expression rules table for Assamese script
 * @author Junaid P V ([[user:Junaidpv]])
 * @date 2010-12-01, updated 2011-11-10
 * @credits W Chaipau and Prabhakar Sarma Neog and Assameses Wikimedia community
 * License: GPLv3
 */

var rules = [
['([ক-হড়-য়ৰৱ])(্ড়্ড়্i|্q)', '', '$1ৃ'], // <consonant>RRi or <consonant>q

['(ড়্ড়্i|q)', '', 'ঋ'], // RRi or	q

['([ক-হড়-য়ৰৱ])্o', '', '$1'], // <consonant>o
['([ক-হড়-য়ৰৱ])্a', '', '$1া'], // <consonant>a
['([ক-হড়-য়ৰৱ])্i', '', '$1ি'], // <consonant>i
['([ক-হড়-য়ৰৱ])(িi|্I)', '', '$1ী'], // <consonant>ii or <consonant>I
['([ক-হড়-য়ৰৱ])্u', '', '$1ু'], // <consonant>u
['([ক-হড়-য়ৰৱ])(ুu|্U)', '', '$1ূ'], // <consonant>uu or <consonant>U

['([ক-হড়-য়ৰৱ])্e', '', '$1ে'], // <consonant>e
['([ক-হড়-য়ৰৱ])i', '', '$1ৈ'], // <consonant>oi
['([ক-হড়-য়ৰৱ])্O', '', '$1ো'], // <consonant>O
['([ক-হড়-য়ৰৱ])u', '', '$1ৌ'], // <consonant>ou

['(খ্y|c)', '', 'ক্ষ্'], // khy or c

['ইi', '', 'ঈ'], // ii
['উu', '', 'ঊ'], // uu
['অi', '', 'ঐ'], // oi
['অu', '', 'ঔ'], // ou
['ত~', '', 'ৎ'], // t~

['ক্h', '', 'খ্'], // kh
['গ্h', '', 'ঘ্'], // gh
['ন্g', '', 'ঙ্'], // ng
['জ্h', '', 'ঝ্'], // jh
['(ন্~|Y)', '', 'ঞ্'], // n~ or Y
['ট্h', '', 'ঠ্'], // Th
['ড্h', '', 'ঢ্'], // Dh
['ত্h', '', 'থ্'], // th
['দ্h', '', 'ধ্'], // dh
['(প্h|f)', '', 'ফ্'], // ph or f
['(ব্h|v)', '', 'ভ্'], // bh or v
['শ্h', '', 'ষ্'], // Xh
['ড়্h', '', 'ঢ়্'], // Rh

['o', '', 'অ'],
['a', '', 'আ'],
['i', '', 'ই'],
['I', '', 'ঈ'],
['u', '', 'উ'],
['U', '', 'ঊ'],
['e', '', 'এ'],
['O', '', 'ও'],

['H', '', 'ঃ'],
['\\^', '', 'ঁ'],
['C', '', '৺'],

['k', '', 'ক্'],
['g', '', 'গ্'],
['s', '', 'চ্'],
['S', '', 'ছ্'],
['j', '', 'জ্'],
['T', '', 'ট্'],
['D', '', 'ড্'],
['N', '', 'ণ্'],
['t', '', 'ত্'],
['d', '', 'দ্'],
['n', '', 'ন্'],
['p', '', 'প্'],
['b', '', 'ব্'],
['m', '', 'ম্'],
['z', '', 'য্'],
['r', '', 'ৰ্'],
['l', '', 'ল্'],
['w', '', 'ৱ্'],
['X', '', 'শ্'],
['x', '', 'স্'],
['h', '', 'হ্'],
['R', '', 'ড়্'],
['y', '', 'য়্'],

['\\\\\\.', '', '.'],
['।\\.', '', '॥'],
['\\.', '', '।'],

['0','', '০'],
['1','', '১'],
['2','', '২'],
['3','', '৩'],
['4','', '৪'],
['5','', '৫'],
['6','', '৬'],
['7','', '৭'],
['8','', '৮'],
['9','', '৯'],

['(\u200D)*`', '', '\u200D']
];

jQuery.narayam.addScheme( 'as', {
	'namemsg': 'narayam-as',
	'extended_keyboard': false,
	'lookbackLength': 8,
	'keyBufferLength': 0,
	'rules': rules
} );
