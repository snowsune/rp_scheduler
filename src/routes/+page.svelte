<script lang="ts">
    import { Button } from "$lib/components/ui/button";

    let text = $state<string>();
    const names: string[] = ["Primary", "Secondary", "Middle", "Back", "Forward"];
    type ProcessButtons = (value: number) => string[];
    const processButtons: ProcessButtons = value => compress(names, value.toString(2));
    
    /** https://docs.python.org/3/library/itertools.html#itertools.compress */
    function compress(data: string[], selectors: string): string[] {
        return data.filter((_, i) => selectors[i]);
    }

    function onclick(e: MouseEvent) {
        text = text === "Boop" ? "Bap" : "Boop";
        const formatter = new Intl.ListFormat("en", {"style": "long", "type": "conjunction"});
        const buttons: string = formatter.format(processButtons(e.buttons));
        alert(`Pressed buttons: ${buttons}`);
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h1>RP Scheduler</h1>
<p>Scheduler here!</p>

<h2 class="bg-purple-300">Features Coming Soon</h2>
<ul>
    <li>Schedule RP stuff!</li>
</ul>

<h2>Svelte Demo (Vixi dosn't know!)</h2>

<Button variant="outline" {onclick}>{text}</Button>