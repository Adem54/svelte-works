import fs from 'fs';

type INIRET = {
	sEnv: string;
	sLogPath: string;
	sDatabase: string;
	sDBHost: string;
	sDBUser: string;
	sDBPass: string;
	sDBPort: string;
};


export function read_ini(sIniFile: string): INIRET
{
	let sPath: string = "";
	let sSlash = "";

	switch (process.platform)
	{
		case 'darwin': // Mac
		case 'linux': // Linux
		case 'freebsd':
		case 'aix':
		case 'openbsd':
		case 'sunos':
			const data = fs.readFileSync("/etc/environment");
			let sData: string = data.toString();
			let aLines = sData.split("\n");
			for (let i=0; i<aLines.length; i++)
			{
				let aLine = aLines[i].split('=');
				if (aLine[0]=='ffd_inipath')
				{
					sPath = aLine[1];
				}
			}
			sSlash = "/";
			break;

		case 'win32':
			sPath = process.env.ffd_inipath ?? "";
			sSlash = "\\";
			break;
	}
	let sLastChar = sPath.at(-1); // Last char
	if (sLastChar !== sSlash)
		sPath += sSlash;
	else
		sLastChar = "";

	let sLogPath: string = "";
	let sEnvironment: string = "";
	let sDatabase: string = "";
	let sDBHost: string = "";
	let sDBUser: string = "";
	let sDBPass: string = "";
	let sDBPort: string = "";

	if (sIniFile.length > 0)
	{
		const iniData = fs.readFileSync(sPath+sIniFile, 'utf-8');

    	// Parse the INI file
		let sData: string = iniData.toString();
		let aLines = sData.split("\n");
		let sCurrentHeading = "";

		for (let i=0; i<aLines.length; i++)
		{
			if (aLines[i].substring(0,1)=='[')
				sCurrentHeading = aLines[i];

			switch (sCurrentHeading)
			{
				case '[GENERAL]':
					let aLinegen = aLines[i].split('=');
					if (aLinegen.length==2)
					{
						switch (aLinegen[0])
						{
							case 'environment':
								sEnvironment = aLinegen[1];;
								break;

							case 'logpath':
								sLogPath = aLinegen[1];
								break;
						}
					}
					break;

				case '[DATABASE]':
					let aLinedb = aLines[i].split('=');
					if (aLinedb.length==2)
					{
						switch (aLinedb[0])
						{
							case 'database':
								sDatabase = aLinedb[1];
								break;

							case 'host':
								sDBHost = aLinedb[1];
								break;

							case 'user':
								sDBUser = aLinedb[1];
								break;

							case 'password':
								sDBPass = aLinedb[1];
								break;
					
							case 'port':
								sDBPort = aLinedb[1];
								break;
						}
					}
					break;

				default:
					break;
			}
		}
	}

	let oRet: INIRET = {
		sEnv: sEnvironment,
		sLogPath: sLogPath,
		sDatabase: sDatabase,
		sDBHost: sDBHost,
		sDBUser: sDBUser,
		sDBPass: sDBPass,
		sDBPort: sDBPort
	};
	return (oRet);
}