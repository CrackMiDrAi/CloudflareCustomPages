const _LoadingAnime = [
	{
		text: '_∠( ᐛ 」∠)＿____',
		time: 800
	},
	{
		text: '__∠( ᐛ 」∠)＿___',
		time: 800
	},
	{
		text: '___∠( ᐛ 」∠)＿__',
		time: 800
	},
	{
		text: '____∠( ᐛ 」∠)＿_',
		time: 800
	},
	{
		text: '___∠( ᐛ 」 ∠)＿_',
		time: 1200
	},
	{
		text: '___∠( ᐛ 」∠)＿__',
		time: 200
	},
	{
		text: '__∠( ᐛ 」 ∠)＿__',
		time: 200
	},
	{
		text: '__∠( ᐛ 」∠)＿___',
		time: 200
	},
	{
		text: '_∠( ᐛ 」 ∠)＿___',
		time: 200
	},
	{
		text: '_∠( ᐛ 」∠)＿____',
		time: 200
	},
];

function CreateLoadingAnime(dom)
{
	let clockId = -1;
	let currentAnimeId = 0;
	
	_Tick();
	
	function _Tick()
	{
		dom.innerHTML = _LoadingAnime[currentAnimeId].text;
		
		currentAnimeId++;
		if (currentAnimeId >= _LoadingAnime.length)
		{
			currentAnimeId = 0;
		}
		
		clockId = setTimeout(() => { _Tick() }, _LoadingAnime[currentAnimeId].time ? _LoadingAnime[currentAnimeId].time : 1000);
	}
}