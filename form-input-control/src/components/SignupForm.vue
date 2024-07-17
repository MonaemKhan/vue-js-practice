<template>
    <form>
        <label>Email:</label>
        <input type="email" v-model="email">
        <label>Password:</label>
        <input type="email" v-model="password">
        <label>Role:</label>
        <select v-model="role">
            <option v-for="r in roles" :key="r" :value="r.name">{{ r.name }}</option>
        </select>
        <div>
            <label>Education Label:</label><br />
            <input type="checkbox" name="msc" value="msc" v-model="educationStatus" >
            <label for="msc">M.Sc</label>
            <input type="checkbox" name="bsc" value="bsc" v-model="educationStatus" >
            <label for="bsc">B.Sc</label>
            <input type="checkbox" name="hsc" value="hsc" v-model="educationStatus" >
            <label for="hsc">HSC</label>
            <input type="checkbox" name="ssc" value="ssc" v-model="educationStatus" >
            <label for="ssc">SSC</label>
        </div>

        <div>
            <label>Skils</label>
            <input type="text" v-model="Skill" @keydown="addSkill" >
        </div>
        <div>
            <div class="phil" v-for="item in skills" :key="item">
                <span @click="deleteMetadata(item)">{{ item }}</span>
                <button @click="deleteMetadata(item)">X</button>
                
            </div>
        </div>


        <div class="terms">
            <input type="checkbox" v-model="terms" >
            <label>Accept Terms & Condition</label>
        </div>


    </form>

    <ModalView v-if="isModalShow" :header="header" :text="text" :theme="header" />
    <p>Email : {{ email }}</p>
    <p>Password : {{ password }}</p>
    <p>Role : {{ role }}</p>
    <p>Education Status : {{ educationStatus }}</p>
    <p>Skills : {{ skills }}</p>
</template>

<script>
import ModalView from './Modal-View/ModalView.vue'
export default {
    name: 'SignupForm',
    components: {
        ModalView
    },
    data() {
        return {
            email: '',
            password: '',
            role: 'Web Developer',
            terms: true,
            educationStatus: [],
            Skill: '',
            tempskill: '',
            skills: [],
            isModalShow: false,
            header: '',
            text: '',
            roles: [
                {
                    name: 'Web Developer'
                }, {
                    name: 'Backend Developer'
                }, {
                    name: 'Database Developer'
                }, {
                    name: 'Support'
                }, {
                    name: 'Service'
                }
            ]
        }
    },
    methods: {
        addSkill(e) {
            const regex = /^[A-Za-z0-9]+$/;
            if (regex.test(e.key)) {
                this.tempskill += e.key;
            } else {
                this.skills.push(this.tempskill);
                this.header = 'success';
                this.text = 'Data Insert Sucessfull';
                this.isModalShow = true;
                setTimeout(() => {
                    this.isModalShow = false;
                    this.Skill = '';
                    this.tempskill = '';
                }, 2000);
            }
        },

        deleteMetadata(item){
         this.skills = this.skills.filter((el)=>{
            if(item === el ){
                this.header = 'Delete';
                this.text = 'Data Delete Sucessfull';
                this.isModalShow = true;
                setTimeout(() => {
                    this.isModalShow = false;
                }, 2000);
            }
            return item !== el 
         });  
        }
    }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}

.phil{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee ;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
</style>