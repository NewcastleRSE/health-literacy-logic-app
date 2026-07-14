---
title: "Tools"
eyebrow: "A list of helpful tools"
lead: "Here you can find a list of helpful tools"
layout: article
---

<script>
	import {base} from '$app/paths';
    import ImageContainer from '$lib/components/ImageContainer.svelte'
    import AlertBox from '$lib/components/AlertBox.svelte'
</script>

<AlertBox alert={{"alert-type": "tip", "alert-title":"Example", "alert-content":"This is an example of a *Call to Action* (CTA) that can be used at the top of a page (or anywhere). You can also easily [add links](http://example.com). <br/> Or start new lines."}}/>

This is a normal paragraph introducing a list:

- This is a list item
- This is a second list item
- This is a list item with a [link](http://example.com)

If you want to add an image, place the image in the `static/assets/images` folder, copy the code below in the `.md` file, and replace the image name.

<ImageContainer src="{base}/assets/images/bermix-studio-00heEp9LFP0-unsplash.jpg" alt="Medical student textbooks with pencil and white bookmarks and stethoscope." caption="Project PATH- Planning and Assessment Tool for Health Literacy"/>

