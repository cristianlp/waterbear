(function(wb){
'use strict';
    wb.menu(
        {
            "sectionkey": "strings",
            "name": "Strings",
            "help": "String blocks represent or manipulate bits of text (strings of characters)",
            "blocks": [
                {
                    "blocktype": "expression",
                    "id": "453e26ad-8bcc-4b48-a173-2d5eb4b15af3",
                    "script": "{{1}}.split({{2}})",
                    "type": "array",
                    "help": "create an array by splitting the named string on the given string",
                    "sockets": [
                        {
                            "name": "string",
                            "type": "string",
                            "value": null
                        },
                        {
                            "name": "split on",
                            "type": "string",
                            "value": null
                        }
                    ]
                },
                {
                    "blocktype": "expression",
                    "id": "9c1110e8-6722-4baf-a1f2-8b5a1a9ccee2",
                    "type": "string",
                    "script": "({{1}} + {{2}})",
                    "help": "returns a string by joining together two strings",
                    "sockets": [
                        {
                            "name": "concatenate",
                            "type": "string",
                            "value": "hello"
                        },
                        {
                            "name": "with",
                            "type": "string",
                            "value": "world"
                        }
                    ]
                },
                {
                    "blocktype": "expression",
                    "id": "fb943e76-3829-4819-8161-f5b5e829f227",
                    "script": "{{1}}[{{2}}]",
                    "type": "string",
                    "help": "get the single character string at the given index of named string",
                    "sockets": [
                        {
                            "name": "string",
                            "type": "string",
                            "value": null
                        },
                        {
                            "name": "character at",
                            "type": "number",
                            "value": "0"
                        }
                    ]
                },
                {
                    "blocktype": "expression",
                    "id": "e6ef4aef-5342-4ceb-b050-ad3554d77c45",
                    "script": "{{1}}.length",
                    "type": "number",
                    "help": "get the length of named string",
                    "sockets": [
                        {
                            "name": "string",
                            "type": "string",
                            "value": null,
                            "suffix": "length"
                        }
                    ]
                },
                {
                    "blocktype": "expression",
                    "id": "88d791fe-a035-45ac-882f-bd96b30a73bf",
                    "script": "{{1}}.indexOf({{2}})",
                    "type": "number",
                    "help": "get the index of the substring within the named string",
                    "sockets": [
                        {
                            "name": "string",
                            "type": "string",
                            "value": null
                        },
                        {
                            "name": "indexOf",
                            "type": "string",
                            "value": null
                        }
                    ]
                },
                {
                    "blocktype": "expression",
                    "id": "93b4b160-e2e2-438a-a8f0-bf2ceb69aaf3",
                    "script": "{{1}}.replace({{2}}, {{3}})",
                    "type": "string",
                    "help": "get a new string by replacing a substring with a new string",
                    "sockets": [
                        {
                            "name": "string",
                            "type": "string",
                            "value": null
                        },
                        {
                            "name": "replace",
                            "type": "string",
                            "value": null
                        },
                        {
                            "name": "with",
                            "type": "string",
                            "value": null
                        }
                    ]
                },
                {
                    "blocktype": "expression",
                    "id": "6377e5c8-4788-478b-96a6-6388bbed87ec",
                    "script": "{{1}}.toString()",
                    "type": "string",
                    "help": "convert any object to a string",
                    "sockets": [
                        {
                            "name": "to string",
                            "type": "any",
                            "value": null
                        }
                    ]
                },
                {
                    "blocktype": "step",
                    "id": "ddbb51d2-a627-406b-82ff-a7ff3d1d82ed",
                    "script": "// {{1}};\n",
                    "help": "this is a comment and will not be run by the program",
                    "sockets": [
                        {
                            "name": "comment",
                            "type": "string",
                            "value": null
                        }
                    ]
                },
                {
                    "blocktype": "step",
                    "id": "5331ce50-0113-4595-b4d5-69e241f2019b",
                    "script": "window.alert({{1}});",
                    "help": "pop up an alert window with string",
                    "sockets": [
                        {
                            "name": "alert",
                            "type": "string",
                            "value": null
                        }
                    ]
                },
                {
                    "blocktype": "step",
                    "id": "e01e82db-4849-4dcd-b82e-0c5f8e801ba8",
                    "script": "console.log({{1}});",
                    "help": "Send any object as a message to the console",
                    "sockets": [
                        {
                            "name": "console log",
                            "type": "any",
                            "value": null
                        }
                    ]
                },
                {
                    "blocktype": "step",
                    "id": "27f62d38-a1a2-481f-b7ea-35aae955575b",
                    "script": "var __a={{2}};__a.unshift({{1}});console.log.apply(console, __a);",
                    "help": "send a message to the console with a format string and multiple objects",
                    "sockets": [
                        {
                            "name": "console log format",
                            "type": "string",
                            "value": null
                        },
                        {
                            "name": "arguments",
                            "type": "array",
                            "value": null
                        }
                    ]
                },
                {
                    "blocktype": "expression",
                    "id": "efe8c097-a91f-42f7-a92f-50ad32a969db",
                    "script": "global.keys",
                    "help": "for debugging",
                    "type": "object",
                    "sockets": [
                        {
                            "name": "global keys object"
                        }
                    ]
                }
            ]
        }
    );
})(wb);