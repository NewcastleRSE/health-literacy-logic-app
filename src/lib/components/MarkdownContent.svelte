<script>
	import { marked } from 'marked';

	let { markdown = '', className = '' } = $props();

	const html = $derived.by(() => {
		if (!markdown) {
			return '';
		}

		const output = marked.parse(markdown, {
			async: false,
			breaks: true,
			gfm: true,
            
		});

		return typeof output === 'string' ? output : '';
	});

    function removeOuterTag(content) {
    // removes p tags surrounding content
    return content.replace(/<\/?p>/g, "");
  }
</script>

<span class={`${className}`}>
	{@html removeOuterTag(html)}
</span>