<template>
  <div>
    <div class="bg-image page-title">
				<div class="container-fluid">
					<a href="#"><h1>News</h1></a>
					<div class="pull-right">
						<router-link to="/"><i class="fa fa-home fa-lg"></i></router-link> &nbsp;&nbsp;|&nbsp;&nbsp; <router-link to="/blog">News</router-link>&nbsp;&nbsp;|&nbsp;&nbsp; <a>Post</a>
					</div>
				</div>
			</div>

			<div class="container-fluid block-content">
				<div class="row main-grid">
					<div class="col-sm-9 posts">
						<div class="single-post">
							<div class="wow fadeInUp" data-wow-delay="0.3s">
								 <img src="/media/blog/beginnings.jpg" alt="FP Du Toit">
								<div class="post-info">
									<span>BY ADMIN</span>
									<!-- <span>JUN 29, 2015</span> -->
									<span>Delivery, Cargo, Shipment</span>
									<span>0 Comment(s)</span>
								</div>
								<h1>From Humble Beginnings...</h1>
								<div class="post-content">
									<p>With millions of kilometers on the clock we've not lost the appetite for what it is we're doing ... 44 years after hitting the road we've decided it's time to freshen up our identity without losing our colours or reason for being. A man’s most productive years are his naughty forties. That's where we are now... </p>
								
									<div class="clearfix"></div>
									<p>We're more focused than ever to partner our clients in keeping their brands top of mind and "on the shelf" so as to keep their clients happy! There's far more to what we're doing than meets the eye. For that we thank both our valued clients and staff for their ongoing support and loyalty. As the saying goes "the road to success is always under construction." Our promise is simple and measurable. We're driven to deliver!</p>
								</div>
							</div>
						</div>
						<div class="comments wow fadeInUp" data-wow-delay="0.3s">
							<h4>COMMENTS (0)</h4>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="sidebar-container">
							<div class="wow slideInUp" data-wow-delay="0.3s">
								<h4>Categories</h4>
								<ul class="blog-cats">
									<li><a>News</a></li>
								</ul>
							</div>
							<div class="recent-posts wow slideInUp" data-wow-delay="0.3s">
								<h4>Recent posts</h4>
								<div>
                <img src="/media/blog/post6.png" alt="FP Du Toit">
                <router-link to="/blog/blog-6">WHEN ONE HUNDRED YEARS OF EXPERIENCE COMES TOGETHER</router-link>
                <!-- <span>JUN 29, 2015</span> -->
              </div>
              <div>
                <img width="300px" src="/media/fleet-gallery/3.jpg" alt="FP Du Toit">
                <router-link to="/blog/blog-7">JET.X Couriers’ expansion of Fleet with Iveco Vehicles</router-link>
                <!-- <span>JUN 29, 2015</span> -->
              </div>
              <div>
                <img width="300px" src="/media/blog/post8.png" alt="FP Du Toit">
                <router-link to="/blog/blog-8">Desert Dash</router-link>
                <!-- <span>JUN 29, 2015</span> -->
              </div>
							</div>
							<div class="tags wow slideInUp" data-wow-delay="0.3s">
								<h4>Tags</h4>
								<a href="#">Company</a>
								<a href="#">News</a>
								<a href="#">History</a>
							</div>
							<div class="twitter-feeds wow slideInUp" data-wow-delay="0.3s">
								<h4>Facebook posts</h4>
								<div>
									<i class="fa fa-facebook"></i>
									<p>JetX Couriers is proud to be associated with the Nampharm Foundation Adventure Ride 2018.</p>
									<span>September 25, 2018</span>
								</div>
								<div>
									<i class="fa fa-facebook"></i>
									<p>FP du Toit Transport is celebrating their 50th birthday today!</p>
									<span>September 24, 2018</span>
								</div>
								<div>
									<i class="fa fa-facebook"></i>
									<p>New additions to the JetX Couriers local fleet.</p>
									<span>July 19, 2018</span>
								</div>
							</div>
						</div>
					</div>                	
				</div>            
			</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
