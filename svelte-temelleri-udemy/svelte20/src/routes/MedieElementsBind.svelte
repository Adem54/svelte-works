<script lang="ts">
	// These values are bound to properties of the video
	let time = 0;
	let duration:any;
	let paused = true;
	let ended:boolean=false;
	let playbackRate:number=1;
	let volume:number=1;
	let muted:boolean=false;
	let videoWidth:any;
	let videoHeight:any;

	let showControls = true;
	let showControlsTimeout:any;

	// Used to track time of last mouse down event
	let lastMouseDown:any;



	function handleMove(e:Event) {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => (showControls = false), 2500);
		showControls = true;

		if (!duration) return; // video not loaded yet
		if (e.type !== 'touchmove' && !((e as any).buttons & 1)) return; // mouse not down

		const clientX = e.type === 'touchmove' ? (e as any).touches[0].clientX : (e as any).clientX;
		const { left, right } = this.getBoundingClientRect();
		time = (duration * (clientX - left)) / (right - left);
	}

	// we can't rely on the built-in click event, because it fires
	// after a drag — we have to listen for clicks ourselves
	function handleMousedown(e:any) {
		lastMouseDown = new Date();
	}

	function handleMouseup(e:any) {
		if ((new Date() as any) - lastMouseDown < 300) {
			if (paused) e.target.play();
			else e.target.pause();
		}
	}

	function format(seconds:any) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}

	//timestamp i dakika-saniye seklinde yazmak icin kullaniyoruz!!!!
	function secondsFormat(seconds:number=0)
	{
		return new Date(1000*seconds)
		    .toISOString()
			 .substr(14,5);
	}
	/*
	The complete set of bindings for <audio> and <video> is as follows — six readonly bindings...

		duration (readonly) — the total duration of the video, in seconds
		buffered (readonly) — an array of {start, end} objects
		seekable (readonly) — ditto
		played (readonly) — ditto
		seeking (readonly) — boolean
		ended (readonly) — boolean

		...and five two-way bindings:

		currentTime — the current point in the video, in seconds
		playbackRate — how fast to play the video, where 1 is 'normal'
		paused — this one should be self-explanatory
		volume — a value between 0 and 1
		muted — a boolean value where true is muted
		Videos additionally have readonly videoWidth and videoHeight bindings.
	*/
</script>

<h1>Caminandes: Llamigos</h1>

<div>
	Time: {secondsFormat(duration)} <!--burasi da video nun zaman olarak ne kadar surdugudur..-->
	<br>
	Finish: {paused ? "Yes" : "No"}
	<!--Video calisirken, true, video her duraklatildiginda false gelir-->
	<br>
	Finish: {ended ? "Yess" : "Noo"}
	<!--Video calisirken true- video bittiginde false oluyor burasi-->
</div>
<!--
	ramge input ile currentTime i control etmek icin value yi bind eddiyoruz currentTime in value si olan time a 
	ve de 
-->
<div>
	<h5>Duration!</h5>
	<input type="range" min="0" max={duration} bind:value={time}></div>

<!--Burda da playbackRate ile biz video nun oynatma hizini ayarlayabiliyoruz-->
<div>
	<h5>Play-speed!</h5>
	<input type="range" min="1" max="4" bind:value={playbackRate}>
</div>
<div>
	<h5>Volume!</h5>
	<input type="range" min="0" max="1" step="0.1" bind:value={volume}>
</div>

<div>
	<!--Bu sekilde tamamen sesi acip kapatabliyoruz!!!-->
	<h5>Muted</h5>
	<button on:click={()=>muted=!muted}>
	{muted ? "MakeUnMuted" : "MakeMuted"}
	</button>
</div>

<div>
	<!--Bu sekilde tamamen sesi acip kapatabliyoruz!!!-->
	<h5>Paused</h5>
	<button on:click={()=>paused=!paused}>
	{paused ? "Play" : "Pause"}
	</button>
</div>
<!--video nun boyuutunun kendisinn px olarak veriyor-->
<h4>videoWidth:{videoWidth}</h4>
<h4>videoHeight:{videoHeight}</h4>

<!--Su anda video dan biz video nun 	on:mousemove={handleMove}
		on:touchmove|preventDefault={handleMove}
		on:mousedown={handleMousedown}
		on:mouseup={handleMouseup}
		bunlari kaldirdigmzda artik tum video islemlerin kendimiz yapabildik...
		Bu sekilde biz svelte ile video  yayinlayabiliriz...
	
	-->

<p>From <a href="https://studio.blender.org/films">Blender Studio</a>. CC-BY</p>

<div>
	<video
		
		poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
		src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
		on:mousemove={handleMove}
		on:touchmove|preventDefault={handleMove}
		on:mousedown={handleMousedown}
		on:mouseup={handleMouseup}
		bind:currentTime={time}
		bind:duration
		bind:paused
		bind:ended
		bind:playbackRate
		bind:volume
		bind:muted
		bind:videoWidth
		bind:videoHeight
	>
		<track kind="captions" />
	</video>

	<div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
		<progress value={time / duration || 0} />

		<div class="info">
			<span class="time">{format(time)}</span>
			<span>click anywhere to {paused ? 'play' : 'pause'} / drag to seek</span>
			<span class="time">{format(duration)}</span>
		</div>
	</div>
</div>

<style>
	div {
		position: relative;
	}

	.controls {
		position: absolute;
		top: 0;
		width: 100%;
		transition: opacity 1s;
	}

	.info {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	span {
		padding: 0.2em 0.5em;
		color: white;
		text-shadow: 0 0 8px black;
		font-size: 1.4em;
		opacity: 0.7;
	}

	.time {
		width: 3em;
	}

	.time:last-child {
		text-align: right;
	}

	progress {
		display: block;
		width: 100%;
		height: 10px;
		-webkit-appearance: none;
		appearance: none;
	}

	progress::-webkit-progress-bar {
		background-color: rgba(0, 0, 0, 0.2);
	}

	progress::-webkit-progress-value {
		background-color: rgba(255, 255, 255, 0.6);
	}

	video {
		width: 100%;
	}
</style>
