<template>
  <Layout>
    <LayoutHeader class="header"> </LayoutHeader>
    <Layout>
      <LayoutSider width="200" style="background: #fff"> </LayoutSider>
      <Layout style="padding: 0 24px 24px">
        <LayoutContent
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </LayoutContent>
      </Layout>
    </Layout>
  </Layout>
</template>
<script lang="ts" setup>
import { Layout, LayoutContent, LayoutHeader, LayoutSider } from 'ant-design-vue'
</script>
