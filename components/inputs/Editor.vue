<template>
    <div class="pl-16 border-2 border-stone-100">
        <div :id="id"></div>
    </div>
</template>

<script lang="js" setup>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import LinkTool from "@editorjs/link";
import RawTool from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";

// import ImageTool from '@editorjs/image';

import Checklist from '@editorjs/checklist';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import AttachesTool from '@editorjs/attaches';
import Paragraph from '@editorjs/paragraph';
import CodeTool from '@editorjs/code';
import Marker from '@editorjs/marker';

// import NestedList from '@editorjs/nested-list';

const props = defineProps({
  id: {
    type: String,
    default: crypto.randomUUID(),
  },
});

const editor = new EditorJS({
  holder: props.id,
  tools: {
    headers: Header,
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
    linkTool: {
      class: LinkTool,
      config: {
        endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching,
      },
    },
    raw: RawTool,
    image: SimpleImage,
    // image: {
    //   class: ImageTool,
    //   config: {
    //     endpoints: {
    //       byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
    //       byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
    //     }
    //   }
    // },
    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },
    list: {
      class: List,
      inlineToolbar: true,
      config: {
        defaultStyle: 'unordered'
      }
    },
    // list: {
    //   class: NestedList,
    //   inlineToolbar: true,
    //   config: {
    //     defaultStyle: 'unordered'
    //   },
    // },
    embed: Embed,
    quote: Quote,
    table: Table,
    code: CodeTool,
    marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M',
    },
    attaches: {
      class: AttachesTool,
      config: {
        endpoint: 'http://localhost:8008/uploadFile'
      }
    }
  },
});
</script>

<style>
    .ce-block__content,
    .ce-toolbar__content {
        max-width: unset;
    }
</style>