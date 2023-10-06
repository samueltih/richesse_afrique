<template>
  <div class="max-w-screen-xl w-full">
    <breadcrumbs>
      <breadcrumb-item href="/">
        <Icon icon="ph:home" /> Home
      </breadcrumb-item>
      <breadcrumb-item href="">Blog</breadcrumb-item>
      <breadcrumb-item>1</breadcrumb-item>
    </breadcrumbs>
  </div>
  <div class="flex gap-4 max-w-screen-xl w-full">
    <div class="flex-1 flex flex-col gap-4">
      <div class="flex gap-2 items-center text-sm">
        <span class="p-1 bg-green-100 rounded">Soins du corps</span>
        <span class="p-1 bg-sky-100 rounded">Crème</span>
      </div>
      <div class="flex flex-col gap-4">
        <h1 class="text-5xl font-bold  my-4">Comment avoir une belle peau</h1>
        <div class="">{{ formatRelative(subHours(new Date(), 1), new Date()) }}</div>
        <img src="/skincare.jpg" alt="hero" />
        <p class="text-stone-500 italic">
          The standard Lorem Ipsum Npassage, used since the 1500s
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum."

          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil
          molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

          1914 translation by H. Rackham
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
          will
          give you a complete account of the system, and expound the actual teachings of the great explorer of the
          truth,
          the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
          pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are
          extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because
          it
          is pain, but because occasionally circumstances occur in which toil and pain can procure him some great
          pleasure.
          To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some
          advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
          annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

          Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque
          corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
          culpa
          qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
          expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
          maxime
          placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
          aut
          officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
          recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
          consequatur aut perferendis doloribus asperiores repellat."

          1914 translation by H. Rackham
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
          by
          the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that
          are
          bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the
          same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
          In
          a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we
          like
          best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the
          claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated
          and
          annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        </p>
      </div>
      <section role="social" class="flex">
        <span class="flex-1">
          #hair #skincare
        </span>
        <span class="flex-1 flex gap-4 justify-end">
          <span>Share:</span>
          <button>
            <icon icon="ph:instagram-logo-light" :height="24" />
          </button>
          <button>
            <icon icon="ph:twitter-logo-light" :height="24" />
          </button>
          <button>
            <icon icon="ph:facebook-logo-light" :height="24" />
          </button>
          <button>
            <icon icon="ph:youtube-logo-light" :height="24" />
          </button>
        </span>
      </section>
      <section class="flex flex-col gap-4">
        <h4 class="text-sm font-bold">Written by</h4>
        <div class="flex gap-4 items-center">
          <avatar /> <b>John Doe</b>
        </div>
      </section>
      <divider />
      <section role="navigation" class="flex">
        <span class="flex-1 flex gap-2 items-center">
          <a href="#">
            <icon icon="ph:caret-left-light" :height="30" />
          </a>
          <span class="flex flex-col gap-1">
            <span class="text-slate-400 text-sm">PREVIOUS</span>
            <a href="#">Comment défriser ses cheveux</a>
          </span>
        </span>
        <span class="flex-1 flex gap-2 items-center justify-end">
          <span class="flex flex-col gap-1">
            <span class="text-slate-400 text-sm">NEXT</span>
            <a href="#">Comment sècher ses cheveux</a>
          </span>
          <a href="#">
            <icon icon="ph:caret-right-light" :height="30" />
          </a>
        </span>
      </section>
    </div>

    <div class="w-64">
      <div class="sticky top-6">
        <div class="flex gap-4 p-2">
          <div>Image</div>
          <div>
            <h4>Mask avec miel et poudre de chébé</h4>
            <div class="flex gap-2">
              <Tag>Beaute</Tag>
              <Tag>Hygiène intime</Tag>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <section role="similar-articles" class="my-12 max-w-screen-xl w-full">
    <h4 class="text-3xl font-bold my-6">Article.s similaire.s</h4>
    <div class="overflow-x-hidden">
      <div class="flex gap-6">
        <article-thumbnail></article-thumbnail>
        <article-thumbnail></article-thumbnail>
        <article-thumbnail></article-thumbnail>
      </div>
    </div>
  </section>

  <section role="similar-articles" class="my-12 max-w-screen-xl w-full">
    <h4 class="text-3xl font-bold my-6">Commentaire.s (4)</h4>
    <divider />

    <div>
      <div class="flex gap-4 items-center px-4 py-2 relative">
        <ClientOnly>
          <xyz-transition xyz="fade down duration-2">
            <emoji-picker v-if="showEmojiPicker" class="absolute bottom-full left-4 z-10" :native="true"
              @select="onSelectEmoji" />
          </xyz-transition>
        </ClientOnly>
        <span>
          <button class="hover:bg-black hover:bg-opacity-20 hover:cursor-pointer p-2 rounded"
            @click="handletoggleEmojiPicker">
            <Icon icon="ph:smiley" :height="24" />
          </button>
        </span>
        <span class="flex-1 flex gap-2 p-2 bg-white">
          <textarea v-model="message" placeholder="Ecrivez votre message" class="bg-transparent flex-1 outline-none" />
        </span>
        <span>
          <button class="hover:bg-black hover:bg-opacity-20 hover:cursor-pointer p-2 rounded">
            <Icon icon="ph:paper-plane-right" :height="24" />
          </button>
        </span>
      </div>
    </div>

    <div class="flex gap-4 items-center text-sm">
      <button class="text-green-500">Best</button>
      <button>Most recent</button>
      <button>Oldest</button>
    </div>
    <divider />

    <div class="flex flex-col">
      <div class="flex gap-8 items-stretch p-4">
        <avatar />
        <div class="flex flex-col">
          <div class="flex gap-4 items-center">
            <h4 class="font-bold">John Doe</h4>
            <span class="text-stone-400 text-sm italic">3 hours ago</span>
            <span class="flex-1"></span>
            <span class="flex gap-2 items-center">
              <button>
                <Icon icon="ph:flag" />
              </button>
              <button>
                <Icon icon="ph:caret-down" />
              </button>
            </span>
          </div>
          <div class="flex-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eos dolores ipsum quas corporis quaerat veniam
            magnam reprehenderit tempora illo quidem, ea incidunt, rerum quia odit quae fugiat libero deserunt!
          </div>
          <div class="flex items-center gap-4">
            <button class="flex gap-2 items-center">
              <Icon icon="ph:thumbs-up" /> 75
            </button>
            <button class="flex gap-2 items-center">
              <Icon icon="ph:thumbs-down" /> 6
            </button>
            <button class="flex gap-2 items-center">
              <Icon icon="ph:arrow-bend-up-left" />Reply
            </button>
            <button class="flex gap-2 items-center">
              <Icon icon="ph:share-network" />Share
            </button>
          </div>
        </div>
      </div>
      <div class="flex gap-8 items-stretch p-4">
        <avatar />
        <div class="flex flex-col">
          <div class="flex gap-4 items-center">
            <h4 class="font-bold">John Doe</h4>
            <span class="text-stone-400 text-sm italic">3 hours ago</span>
            <span class="flex-1"></span>
            <span class="flex gap-2 items-center">
              <button>
                <Icon icon="ph:flag" />
              </button>
              <button>
                <Icon icon="ph:caret-down" />
              </button>
            </span>
          </div>
          <div class="flex-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eos dolores ipsum quas corporis quaerat veniam
            magnam reprehenderit tempora illo quidem, ea incidunt, rerum quia odit quae fugiat libero deserunt!
          </div>
          <div class="flex items-center gap-4">
            <button class="flex gap-2 items-center">
              <Icon icon="ph:thumbs-up" /> 75
            </button>
            <button class="flex gap-2 items-center">
              <Icon icon="ph:thumbs-down" /> 6
            </button>
            <button class="flex gap-2 items-center">
              <Icon icon="ph:arrow-bend-up-left" />Reply
            </button>
            <button class="flex gap-2 items-center">
              <Icon icon="ph:share-network" />Share
            </button>
          </div>
        </div>
      </div>
      <div class="flex gap-8 items-stretch p-4">
        <avatar />
        <div class="flex flex-col">
          <div class="flex gap-4 items-center">
            <h4 class="font-bold">John Doe</h4>
            <span class="text-stone-400 text-sm italic">3 hours ago</span>
            <span class="flex-1"></span>
            <span class="flex gap-2 items-center">
              <button>
                <Icon icon="ph:flag" />
              </button>
              <button>
                <Icon icon="ph:caret-down" />
              </button>
            </span>
          </div>
          <div class="flex-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eos dolores ipsum quas corporis quaerat veniam
            magnam reprehenderit tempora illo quidem, ea incidunt, rerum quia odit quae fugiat libero deserunt!
          </div>
          <div class="flex items-center gap-4">
            <button class="flex gap-2 items-center">
              <Icon icon="ph:thumbs-up" /> 75
            </button>
            <button class="flex gap-2 items-center">
              <Icon icon="ph:thumbs-down" /> 6
            </button>
            <button class="flex gap-2 items-center">
              <Icon icon="ph:arrow-bend-up-left" />Reply
            </button>
            <button class="flex gap-2 items-center">
              <Icon icon="ph:share-network" />Share
            </button>
          </div>
        </div>
      </div>
      <div class="flex gap-8 items-stretch p-4">
        <avatar />
        <div class="flex flex-col">
          <div class="flex gap-4 items-center">
            <h4 class="font-bold">John Doe</h4>
            <span class="text-stone-400 text-sm italic">3 hours ago</span>
            <span class="flex-1"></span>
            <span class="flex gap-2 items-center">
              <button>
                <Icon icon="ph:flag" />
              </button>
              <button>
                <Icon icon="ph:caret-down" />
              </button>
            </span>
          </div>
          <div class="flex-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eos dolores ipsum quas corporis quaerat veniam
            magnam reprehenderit tempora illo quidem, ea incidunt, rerum quia odit quae fugiat libero deserunt!
          </div>
          <div class="flex items-center gap-4">
            <button class="flex gap-2 items-center">
              <Icon icon="ph:thumbs-up" /> 75
            </button>
            <button class="flex gap-2 items-center">
              <Icon icon="ph:thumbs-down" /> 6
            </button>
            <button class="flex gap-2 items-center">
              <Icon icon="ph:arrow-bend-up-left" />Reply
            </button>
            <button class="flex gap-2 items-center">
              <Icon icon="ph:share-network" />Share
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button class="p-2 bg-green-500 text-white">See more comments</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { formatRelative, subHours } from 'date-fns';

const showEmojiPicker = ref<boolean>(false);
const message = ref<string>('');

function handletoggleEmojiPicker() {
  showEmojiPicker.value = !showEmojiPicker.value;
}

function onSelectEmoji(emoji: any) {
  message.value += emoji.v && emoji.t != 'neutral' ? String.fromCodePoint(parseInt(`0x${emoji.u}`), parseInt(`0x${emoji.t}`)) : String.fromCodePoint(parseInt(`0x${emoji.u}`));
}

definePageMeta({
  layout: 'main'
})
</script>
