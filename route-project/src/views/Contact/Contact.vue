<template>
    <div v-for="item in contact_data" :key="item.id">
        {{ item.title }}
        <router-link :to="{ name: 'ContactView', params: { id: item.id, userId: item.userId } }">Select</router-link>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            contact_data: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "quidem molestiae enim"
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "sunt qui excepturi placeat culpa"
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "omnis laborum odio"
                },
                {
                    "userId": 1,
                    "id": 4,
                    "title": "non esse culpa molestiae omnis sed optio"
                },
                {
                    "userId": 1,
                    "id": 5,
                    "title": "eaque aut omnis a"
                },
            ]
        }
    }
}
</script>

<style></style>