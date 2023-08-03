

<script lang="ts">
	import Modal from "./Modal.svelte";
	
		let showPopup = false;
	
		const onShowPopup = () => {
			showPopup = true;
		}
	
		const onPopupClose = (data:any) => 
		{
			showPopup = false;
	
			console.log("data: ",data);
		}

		let closeType = "";
		const closePopup = (event:any)=>{
			console.log("event : ",event);

			 closeType = event.detail.closeType;
			console.log("closeType : ",closeType);//Kullanici delete e tiklarsa delete oluyor, close a tiklarsa close oluyor..
			showPopup = false;
		}
	
	</script>
	
	<main>
		<div class="container">
			<button type="button" class="btn btn-success" on:click={onShowPopup}>Show Popup</button>
	
			<!-- <Modal on:modalClose={closePopup} open={showPopup} onClosed={(data) => onPopupClose(data)}> -->
				<Modal on:modalClose={closePopup} open={showPopup}>
				<h2>Testing</h2>
			</Modal>
		</div>
	</main>
