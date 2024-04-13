<template>
    <breadcrumbs>
        <breadcrumb-item href="/admin">Admin</breadcrumb-item>
        <breadcrumb-item>Website</breadcrumb-item>
    </breadcrumbs>
    <div class="flex gap-2 items-center my-2">
        <h1 class="flex-1 text-3xl font-bold">Website</h1>
        <div class="flex gap-4 items-center">
            <button class="p-2 flex gap-2 items-center">Save</button>
        </div>
    </div>

    <div class="flex gap-8 items-center my-2">
        <span>Attributes</span>
        <NuxtLink to="seo">SEO</NuxtLink>
        <NuxtLink to="home">Home</NuxtLink>
        <NuxtLink to="about">About</NuxtLink>
    </div>

    <NuxtPage />
    <section>
        <Formkit type="form">
            <FormKit name="siteName" type="text" label="Site Name" placeholder="Site Name" />
            <FormKit name="siteTitle" type="text" label="Site Title" placeholder="Site Title" />
            <FormKit name="favicon" type="file" label="Favicon" placeholder="Favicon" />
            <h4 class="text-xl font-semibold">Logo</h4>
            <div class="flex gap-4 items-center">
                <FormKit name="logo" type="file" label="Logo" placeholder="Logo" />
            </div>
        </Formkit>
    </section>

</template>