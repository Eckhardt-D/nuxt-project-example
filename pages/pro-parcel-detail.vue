<template>
<div>
  <div class="bg-image page-title">
				<div class="container-fluid">
					<router-link to="/jetx-detail"><h1>Pro Parcel Distribution</h1></router-link>
					<div class="pull-right">
						<router-link to="/"><i class="fa fa-home fa-lg"></i></router-link> &nbsp;&nbsp;|&nbsp;&nbsp; <router-link to="/services">Our services</router-link>&nbsp;&nbsp;
					</div>
				</div>
			</div>

			<div class="container-fluid block-content">
				<div class="row">
					<div class="col-sm-12 main-content text-center">
						<h1 class="text-center italic wow zoomIn" data-wow-delay="0.3s">Pro Parcel Distribution was established as a sub-division of the FP du Toit Transport company in 1997.</h1>
						<img width=300px src="/media/3-column-info/3.png" class="wow zoomIn" data-wow-delay="0.3s" alt="Img">
						<div class="row">                    	
							<div class="col-xs-12 wow zoomIn" data-wow-delay="0.3s">
								<!-- <img height="369px" src="/media/images/cross-border.jpg" alt="Img"> -->
								<h4>Services</h4>
								<p>Pro Parcel offers a door-door service from Johannesburg and Cape Town to Namibia. With its large fleet it is
								ideal for large, heavy and awkward shipments that is not time sensitive.
								Pro Parcel also service all major Town in Namibia at least once a week from Windhoek, ensuring that all
								Namibian towns are connected.
								Within this frame work it can offer its clients a depot-door and depot to depot options. Which gives the client
								a choice to drop off at our depot and collect at the destination depot for more price sensitive consignments.
								Our refrigerated vehicles run at 2C from Cape Town to Windhoek once a week. We also offer our clients the
								cold cart options for those items that needs to be kept extra cold on their way to Windhoek.
								Palletized consignments provide our clients the opportunity to maximize the space used for the lowest
								possible price.
								Secure Bins is the latest innovation of Pro Parcel. The bins are sealed by the client after packaging, this seal
								will then only be broken upon delivery. Providing the customer, a peace of mind regarding the safety and
								security of their freight. This bin concept also reduces the risk to damage and pilferage as the bin is black, thus
								cannot be seen through and is made of hard durable plastic. This plastic enables us to stack the bins, thus
								maximizing the space used and nearly eliminating the risk of damage to the client’s freight.</p>
							</div>
						</div>
						<p class="text-center">
							<router-link to="/contact" class="btn btn-danger btn-default wow zoomIn" data-wow-delay="0.3s">request a quote</router-link>
						</p>
					</div>
				</div>            
			</div>
    </div>
</template>

<script>
export default {
	head() {
		return {
			title: 'Pro Parcel | Door-to-door | Depot-to-depot | Refrigerated and Palletised Loads',
			meta: [{
				name: 'description',
				content: 'Pro Parcel provides Door-to-door, Depot-to-depot, Refrigerated and Palletised Loads in Namibia. As part of the FP du Toit Group we provide professional forwarding and Logistics Services with 50 years of experience. Contact us know for any Question.'
			}]
		}
	}
}
</script>

<style>

</style>
