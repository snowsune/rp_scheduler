import App from './App.svelte'

function mount() {
    const target = document.getElementById('rp-scheduler-app')
    if (!target) return
    const app = new App({ target })
    return app
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount)
} else {
    mount()
}

export { }