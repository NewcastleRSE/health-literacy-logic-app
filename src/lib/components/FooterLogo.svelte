<script>
    let {src, url, alt} = $props();
</script>

<a href={url} target="_blank" rel="noopener noreferrer">
    <img class="mx-auto h-16" src={src} alt={alt} />
</a>