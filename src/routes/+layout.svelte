<script>
	import '../app.css';
	import { Toaster } from '@/components/ui/sonner';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '@/components/custom/navbar';
</script>

<main class="container">
	<ModeWatcher />
	<Toaster position="top-center" richColors />
	<Navbar />
	<slot></slot>
</main>
