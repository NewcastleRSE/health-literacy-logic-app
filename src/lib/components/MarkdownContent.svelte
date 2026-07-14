<script>
	import { marked } from 'marked';
	import {base} from '$app/paths';

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

	function replaceBase(html) {
		//check to see if any links contain {base}
		const newBase = base ? `/${base}` : '';
		const regex = new RegExp(`\/%7Bbase%7D`, 'g');
		return html.replace(regex, newBase);
	}
</script>

<span class={`${className}`}>
	{@html replaceBase(removeOuterTag(html))}
</span>

<style>
	:global(a) {
		text-decoration: underline;
	}

	:global(a:hover) {
		text-decoration: underline;
		font-weight: 600;
	}
</style>