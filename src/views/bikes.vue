<template>
    <div>
        <a>车辆管理</a>
        <img v-if="user.photo" :src="user.photo" />
        <div v-bind:id="'list-'+user.name" v-text="user.name"></div>
        <div v-html="user.profile"></div>
        <p>{{user.number+1}}</p>

        <div>正方形边长:{{user.number}}m</div>
        <input type="range" v-model="user.number"></input>
        <div>正方形面积:{{s}}<sup>2</sup></div>

        <!--    数组遍历-->
        <div class="el-row" v-for="pax of user.paxes">
            <div class="el-col-1">{{pax.name}}</div>
            <div class="el-col-1">{{$index}}</div>
        </div>

        <!--  对象属性遍历  -->
        <ul>
            <li v-for="(val,name,index) in user.paxInfo">{{index}}:{{user.keyTitile[name]}}:{{val}}</li>
        </ul>

        <span class="switch" :class="{switched: gender}" v-on:click="gender = Math.abs(~-gender)">
            <span class="switch-item-1">男</span>
            <span class="switch-item-2">女</span>
        </span>
        <input v-model="gender"></input>
        <div>{{gender}}</div>
<!--        <div>-->
<!--            <input type="file" v-model="filePath"></input>{{filePath}}-->
<!--            <button @click="reset">清空</button>-->
<!--        </div>-->
    </div>

</template>


<script>
export default {
	name: 'bikers',
	data() {
		return {
			gender: 0,
			filePath: '',
			user: {
				photo: 'https://lh3.googleusercontent.com/proxy/uKThv4-SoCnkSgJsTrz1MgEq_AkMHc-e6igxrU2YZJpNXfHkD7nHYMs9O0R7hWCR4D_SxyTdnCCVpKIgVjgQVtmwwPEtU7ED8NB6XOcgw7dsMIfy1e0ubw',
				// photo: '',
				name: 'Bill Gtes',
				profile: '<div><strong>技术专家</strong>',
				number: 10,
				paxes: [{
					name: 'x',
					idType: '22',
					idNumber: 111,
					mobile: '123343545',
				}, {
					name: 'y',
					idType: '22',
					idNumber: 111,
					mobile: '123343545',
				}, {
					name: 'z',
					idType: '22',
					idNumber: 111,
					mobile: '123343545',
				}],
				keyTitile: {
					name: '姓名',
					idType: '证件类型',
					idNumber: '证件号码',
					mobile: '手机号码',
				},
				paxInfo: {
					name: '李萌萌',
					idType: '身份证',
					idNumber: '423333344388449',
					mobile: '15333775443',
				},
			},
		}
	},
	computed: {
		s() {
			return this.user.number * this.user.number
		},
	},
	mounted() {
		window.vue = this
	},
	methods: {
		uploadFile(e) {

		},
		reset() {
			this.filePath = ''
		},
	},

}
</script>

<style scoped>
    .switch .switch-item-1 {
        background-color: #0082ff;
        color: #fff;
    }

    .switch .switch-item-2 {
        background-color: #fff;
        color: #0082ff;
    }

    .switch .switched .switch-item-1 {
        background-color: #fff;
        color: #a8b1c0;
    }

    .switch .switched .switch-item-2 {
        background-color: #0082ff;
        color: #fff;
    }

</style>
