<template>
    <div class="home-page">
        <md-card v-for="(card, index) of cardList" :key="index" md-with-hover>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{ card.title}}</div>
                    <div class="md-subhead">{{ card.subTitle }}</div>
                </md-card-header-text>

                <md-card-media :class="[card.size === 'big' ? 'md-big' : (card.size === 'medium' ? 'md-medium' : '')]">
                    <img :src="card.imgUrl" alt="People">
                </md-card-media>

            </md-card-header>

            <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
            </md-card-actions>
        </md-card>

        <md-card>
            <md-card-media-actions>
                <md-card-media>
                    <img src="https://vuematerial.io/assets/examples/villains.png" alt="Cover">
                </md-card-media>

                <md-card-actions>
                    <md-button class="md-icon-button">
                        <md-icon>favorite</md-icon>
                    </md-button>

                    <md-button class="md-icon-button">
                        <md-icon>bookmark</md-icon>
                    </md-button>

                    <md-button class="md-icon-button">
                        <md-icon>share</md-icon>
                    </md-button>
                </md-card-actions>
            </md-card-media-actions>
        </md-card>
    </div>
</template>

<script>
export default {
    name: 'last-row-fixed',
    data: () => ({
        cardList: [
            {
                imgUrl: 'https://vuematerial.io/assets/examples/avatar-2.jpg',
                title: 'Media card',
                subHead: 'subHead',
                size: 'normal',
            },
            {
                imgUrl: 'https://vuematerial.io/assets/examples/card-weather.png',
                title: 'Media card',
                subHead: 'subHead',
                size: 'medium',
            },
            {
                imgUrl: 'https://vuematerial.io/assets/examples/cover.png',
                title: 'Media card',
                subHead: 'subHead',
                size: 'big',
            }
        ]
    })
}
</script>

<style lang="scss" scoped>
    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }
</style>
