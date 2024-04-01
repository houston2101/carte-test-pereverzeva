import {toRefs, ref, onMounted} from 'vue'

const prettifyTime = (unprettyTime) =>
	unprettyTime.length >= 2 ? unprettyTime : `0${unprettyTime}`

const milisToMinutes = (milis) => Math.floor(milis / 60000).toString()
const milisToSeconds = (milis) => Math.floor((milis / 1000) % 60).toString()
export default {
	props: {
		order: Object
	},
	setup(props) {
		const {id, status, deliveryTime, title, deliveryStage, comment} =
			toRefs(props.order)

		const isOpen = ref(false)
		const time = ref(deliveryTime.value)
		const minutes = ref(prettifyTime(milisToMinutes(deliveryTime.value)))
		const seconds = ref(prettifyTime(milisToSeconds(deliveryTime.value)))

		const countDownTimer = (time) => {
			if (time.value > 0) {
				setTimeout(() => {
					time.value -= 1000

					minutes.value = prettifyTime(milisToMinutes(time.value))
					seconds.value = prettifyTime(milisToSeconds(time.value))

					countDownTimer(time)
				}, 1000)
			}
		}

		onMounted(() => {
			if (time.value) {
				countDownTimer(time)
			}
		})

		return {
			id,
			status,
			title,
			deliveryStage,
			deliveryTime,
			comment,
			isOpen,
			time,
			minutes,
			seconds
		}
	},
	template: `
        <!--html-->
        <div class="order-card">
            <div class="order-card__heading">
                <span class="order-card__number">№ {{id}}</span>
                <div class="order-card__state">
                    <span class="order-card__status" v-if="status">{{status}}</span>
                    <span class="order-card__time" v-if="deliveryTime">{{minutes}}:{{seconds}}</span>
                </div>
            </div>
            <span class="order-card__title">{{title}}</span>
            <div class="order-card__delivery-info">
                <ul class="order-card__delivery-stages">
                    <li class="order-card__delivery-stage" v-for="({address}, idx) in deliveryStage">
                        <span class="order-card__delivery-stage-number">{{++idx}}</span>
                        <p class="order-card__delivery-stage-text">{{address}}</p>
                    </li>
                </ul>
                <div class="order-card__comment" v-bind:class="{ active: isOpen }" @click="isOpen = !isOpen">
                    {{comment}}
                </div>
            </div>
            <div class="order-card__delivery-update">
                <button class="order-card__delivery-update-button">Вижу</button>
                <button class="order-card__delivery-update-button">Доставляю</button>
                <button class="order-card__delivery-update-button">Доставил</button>
            </div>
        </div>
    `
}
