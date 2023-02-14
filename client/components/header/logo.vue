<template>
  <div class="w-9">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<ellipse class="st0" cx="253.8" cy="255.8" rx="232.9" ry="233"/>
<g id="wave">
	<path class="st1" d="M43.3,161.2c42.1-0.1,42.4,189.9,84.4,189.8c42.1-0.1,41.7-190,83.8-190.1c42.1-0.1,42.4,189.9,84.4,189.8
		c42.1-0.1,41.7-190,83.8-190.1s42.4,189.9,84.4,189.8"/>
</g>
<g id="wave2">
	<path class="st1" d="M43.3,161.2c42.1-0.1,42.4,189.9,84.4,189.8c42.1-0.1,41.7-190,83.8-190.1c42.1-0.1,42.4,189.9,84.4,189.8
		c42.1-0.1,41.7-190,83.8-190.1s42.4,189.9,84.4,189.8"/>
</g>
<g id="wave3">
	<path class="st1" d="M43.3,161.2c42.1-0.1,42.4,189.9,84.4,189.8c42.1-0.1,41.7-190,83.8-190.1c42.1-0.1,42.4,189.9,84.4,189.8
		c42.1-0.1,41.7-190,83.8-190.1s42.4,189.9,84.4,189.8"/>
</g>
<g id="wave4">
	<path class="st1" d="M43.3,161.2c42.1-0.1,42.4,189.9,84.4,189.8c42.1-0.1,41.7-190,83.8-190.1c42.1-0.1,42.4,189.9,84.4,189.8
		c42.1-0.1,41.7-190,83.8-190.1s42.4,189.9,84.4,189.8"/>
</g>
<ellipse class="st2" cx="255.7" cy="255.5" rx="237.3" ry="237.5"/>
</svg>
  </div>
</template>
<script>
  export default {
    name: "index"
  }

</script>
<style scoped>
/* .logoholder{
	width: 32px;
    height: 32px;
} */
	.st0{fill:#FFFF00;}
	.st1{fill:none;stroke:#E20613;stroke-width:20;stroke-miterlimit:10;}
	.st2{fill:none;stroke:#1D1D1B;stroke-width:30;stroke-miterlimit:10;}
	svg, #wave, #wave2, #wave3, #wave4{
  transition: all 4s ease-in-out;
}
#wave2{
  transform: translateX(339px);
}

#wave3{
  transform: translateX(678px);
}

#wave4{
  transform: translateX(1017px);
}
#wave2{
  transform: translateX(339px);
}

#wave3{
  transform: translateX(678px);
}

#wave4{
  transform: translateX(1017px);
}
header:hover svg{
  filter: drop-shadow(3px 5px 2px rgb(0 0 0/.4));
}
header:hover #wave{
  transform: translateX(-1017px);
}

header:hover #wave2{
  transform: translateX(-678px);
}

header:hover #wave3{
  transform: translateX(-339px);
}

header:hover #wave4{
  transform: translateX(0);
}
</style>
