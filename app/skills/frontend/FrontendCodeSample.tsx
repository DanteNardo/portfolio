'use client'

import { Tab } from '@headlessui/react'
import CodeSample from '@/components/sample/CodeSample'
import SampleTab from '@/components/sample/SampleTab'
import SampleTabGroup from '@/components/sample/SampleTabGroup'
import SampleTabList from '@/components/sample/SampleTabList'
import SampleTabPanels from '@/components/sample/SampleTabPanels'

export default function FrontendCodeSample() {
  const reactSample = `// A custom hook that acts as an HTML canvas reference and
// exposes callback methods on certain events
  
import { useEffect, useRef, useState } from 'react'
import { clearInterval, setInterval } from 'timers'

export const useCanvas = (
  onResize: (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) => void,
  onAnimate: (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) => void,
) => {
  const oneSecondInMilliseconds: number = 1000
  const FPS: number = 60

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [frames, setFrames] = useState<number>(0)

  // A function that is returned to clear the canvas when necessary
  function clear() {
    const canvas = canvasRef?.current
    if (!canvas) return

    const context = canvas?.getContext('2d')
    if (!context) return

    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  // Listens to the window resize event and fires the onResize callback
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef?.current
      const context = canvas?.getContext('2d')

      if (canvas && context) {
        const stageWidth = document.body.clientWidth
        const stageHeight = document.body.clientHeight
        canvas.width = stageWidth
        canvas.height = stageHeight

        onResize(canvas, context)
      }
    }

    window.addEventListener('resize', resize)
    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Fires the animate callback on a specified interval (60 FPS)
  useEffect(() => {
    const animate = () => {
      const canvas = canvasRef?.current
      const context = canvas?.getContext('2d')

      if (canvas && context) {
        onAnimate(canvas, context)
      }
    }

    const interval = setInterval(() => {
      setFrames((frames) => frames + 1)
      animate()
    }, oneSecondInMilliseconds / FPS)

    return () => {
      clearInterval(interval)
    }
  }, [onAnimate])

  return { canvasRef, clear }
}`

  const nextjsSample = `// A page that loads messages from supabase 
// and displays them in a list
  
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import MessageForm from "./MessageForm";
import Messages from "./Messages";
import type { Database } from "@/types/database.types";
import type { Channel, MessageWithAuthor, User } from "@/types/app.types";

export default async function Page({
  params: { channel_id },
}: {
  params: { channel_id: string };
}) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  // Protected route
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect(\`/signin?redirect_uri=\${\`/\${channel_id}\`}\`);
  }

  // Fetch page data
  const { data: messages, error: messagesError } = await supabase
    .from("messages")
    .select("*, author:user_id(*)")
    .eq("channel_id", channel_id)
    .order("inserted_at", { ascending: true })
    .returns<Array<MessageWithAuthor>>();
    
  if (!messages) {
    notFound();
  }

  return (
    <div className="relative z-20 flex flex-col w-screen h-[100svh] min-h-0 items-center overflow-y-scroll text-default bg-base-950">
      <main className="w-2xl p-8 my-16 items-center">
        {messages ? <Messages serverMessages={messages} /> : <></>}
      </main>
      <MessageForm channel_id={channel?.id} user_id={user?.id} slug={slug} />
    </div>
  );
}`

  const blazorSample = `// A custom toast component
  
@implements IDisposable

@if (!string.IsNullOrEmpty(Model.Text))
{
    <div @attributes=@AdditionalAttributes class=@_class>
        @if (Model.Type is not ToastType.Information)
        {
            <i class="material-icons">@IconName</i>
        }
        <p class="text">@Model.Text</p>
        <div class="vertical-line" />
        <button @onclick=@Close>
            <i class="material-icons">close</i>
        </button>
    </div>
}

@code
{
    [Parameter(CaptureUnmatchedValues = true)] public Dictionary<string, object> AdditionalAttributes { get; set; }
    [Parameter] public ToastModel Model { get; set; }
    [Parameter] public EventCallback<ToastModel> OnClose { get; set; }
    [Parameter] public EventCallback<ToastModel> OnTimeout { get; set; }

    private StatusType IconType => Model.Type switch
    {
        ToastType.Success => StatusType.Success,
        ToastType.Information => StatusType.Information,
        ToastType.Warning => StatusType.Warning,
        ToastType.Error => StatusType.Error,
        _ => StatusType.Information,
    };

    private string IconName => Model.Type switch
    {
        ToastType.Success => "check",
        ToastType.Warning => "priority_high",
        ToastType.Error => "cancel",
        _ => "",
    };

    private string _class => new CssBuilder()
        .AddClassFromAttributes(AdditionalAttributes)
        .AddClass("toast")
        .AddClass("success", Model.Type is ToastType.Success)
        .AddClass("information", Model.Type is ToastType.Information)
        .AddClass("warning", Model.Type is ToastType.Warning)
        .AddClass("error", Model.Type is ToastType.Error)
        .Build();

    private Timer _timer;

    protected override void OnInitialized()
    {
        if (Model.Timeout > 0)
        {
            _timer = new Timer(Model.Timeout);
            _timer.Elapsed += OnTimerCallback;
            _timer.AutoReset = false;
            _timer.Start();
        }
    }

    public void Dispose()
    {
        StopTimer();
    }

    private void OnTimerCallback(object sender, ElapsedEventArgs args)
    {
        StopTimer();

        if (OnTimeout.HasDelegate)
        {
            OnTimeout.InvokeAsync(Model);
        }
    }

    private void Close()
    {
        StopTimer();

        if (OnClose.HasDelegate)
        {
            OnClose.InvokeAsync(Model);
        }
    }

    private void StopTimer()
    {
        if (_timer is not null)
        {
            _timer.Stop();
            _timer.Elapsed -= OnTimerCallback;
        }
    }
}`

  const svelteSample = `// A custom, animated popover component

<script>
	import { fly } from 'svelte/transition';
	import { useOutsideClick } from '$lib/actions/use-outside-click';
	import { CssBuilder } from '$lib/builders/css-builder';

	export let open = false;
	export let position = 'left';
	export let triggerType = 'click';

	$: css = new CssBuilder()
		.addClass("absolute z-20 top-[160%] px-6 py-4 text-sm rounded-md shadow-2xl border border-base-700 bg-base-950")
		.addClass("after:content-[''] after:absolute after:-top-[24px] after:border-[12px] after:border-transparent after:border-b-base-950")
		.addClass("before:content-[''] before:absolute before:-top-[25px] before:border-[12px] before:border-transparent before:border-b-base-700")
		.addClass('-left-2 after:left-3 before:left-3', position === 'left')
		.addClass('-right-2 after:right-3 before:right-3', position === 'right')
		.build();

	function onClickOutside() {
		if (triggerType === 'click') {
			open = false;
		}
	}

	function onMouseEnter() {
		if (triggerType === 'hover') {
			open = true;
		}
	}

	function onMouseLeave() {
		if (triggerType === 'hover') {
			open = false;
		}
	}
</script>

<div
	use:useOutsideClick
	on:clickoutside={onClickOutside}
	on:mouseenter={onMouseEnter}
	on:mouseleave={onMouseLeave}
	class="relative"
>
	<slot name="trigger" />
	{#if open}
		<div transition:fly|local={{ duration: 100, x: 0, y: -20, opacity: 0.01 }} class={css}>
			<slot name="content" />
		</div>
	{/if}
</div>`

  const sveltekitSample = `// A page that fetches messages and displays them in a list with user input.
  
<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { channel, channelMessages } from '$lib/stores/channel-store';
	import AlertError from '$lib/components/alerts/AlertError.svelte';
	import MessageInput from '$lib/components/messages/MessageInput.svelte';

	onMount(() => {
		$channel = $page?.data?.channel;
	});
</script>

<div class="flex-1 flex flex-col max-w-4xl max-h-full gap-3 md:gap-6">
	{#await $page?.data?.streamingMessages?.data}
		<div
			use:scrollToBottomAction
			class="flex-auto overflow-hidden rounded border border-base-800 bg-black"
		>
			<div class="flex-auto flex flex-col py-3">
				{#each Array(16) as _, i}
					<Message loading />
				{/each}
			</div>
		</div>
	{:then data}
		<div
			use:scrollToBottomAction
			class="flex-auto overflow-y-auto [overflow-anchor:auto] rounded border border-base-800 bg-black"
		>
			<div class="flex-auto flex flex-col py-3 [overflow-anchor:none]">
				{#each $data as message, i (message?.id)}
					{#if i - 1 < 0 || $data[i - 1].author.id !== message.author.id}
						<Message
							author={message?.author}
							message={message?.message}
							timestamp={message?.inserted_at}
							starting={true}
						/>
					{:else}
						<Message
							author={message?.author}
							message={message?.message}
							timestamp={message?.inserted_at}
							starting={false}
						/>
					{/if}
				{/each}
			</div>
		</div>
	{:catch error}
		<AlertError>Unable to load messages</AlertError>
	{/await}
	<MessageInput />
</div>`

  return (
    <SampleTabGroup>
      <SampleTabList>
        <SampleTab>React</SampleTab>
        <SampleTab>Next.js</SampleTab>
        <SampleTab>Blazor</SampleTab>
        <SampleTab>Svelte</SampleTab>
        <SampleTab>Sveltekit</SampleTab>
      </SampleTabList>
      <SampleTabPanels>
        <Tab.Panel>
          <CodeSample language="typescript">{reactSample}</CodeSample>
        </Tab.Panel>
        <Tab.Panel>
          <CodeSample language="typescript">{nextjsSample}</CodeSample>
        </Tab.Panel>
        <Tab.Panel>
          <CodeSample language="csharp">{blazorSample}</CodeSample>
        </Tab.Panel>
        <Tab.Panel>
          <CodeSample language="javascript">{svelteSample}</CodeSample>
        </Tab.Panel>
        <Tab.Panel>
          <CodeSample language="javascript">{sveltekitSample}</CodeSample>
        </Tab.Panel>
      </SampleTabPanels>
    </SampleTabGroup>
  )
}
