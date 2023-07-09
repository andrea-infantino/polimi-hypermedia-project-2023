<template>
    <v-form v-model="isFormValid" @submit.prevent>
        <v-text-field class="form-elem"
         v-model="email"
         :rules="email_rules"
         label="E-mail"
         variant="solo"
         autocomplete="email"
         placeholder="example@mail.com"
        ></v-text-field>
  
        <v-textarea class="form-elem"
         
         v-model="text"
         :rules="text_rules"
         label="Text Message"
         variant="solo"
        ></v-textarea>
  
        <v-btn class="form-elem"
         :disabled="!isFormValid"
         type="submit"
         @click="submit()"
        >
            submit
            <v-dialog
             v-model="dialog"
             width="auto"
             activator="parent"
            >
                <v-card v-if="ack!=0" class="dialog-card">
                    <div v-if="ack==1" style="color: green;" class="dialog-div">
                        Message successfully sent!
                    </div>
                    <div v-else-if="ack==-1" style="color: red" class="dialog-div">
                        Ooooops! Something went wrong. Try again.
                    </div>
                    <v-card-actions>
                    <v-btn v-if="ack!=0" class="dialog-btn" color="primary" block @click="dialog = false;ack=0">Ok</v-btn>
                    </v-card-actions>
                </v-card>
                <v-progress-circular
                     v-else
                     :size="100"
                     :width="8"
                     indeterminate
                     color="white"
                ></v-progress-circular>
            </v-dialog>
        </v-btn>
    </v-form>
</template>

<script>
export default {
    data: () => ({
        email: '',
        text: '',
        email_rules: [
            value => {
                if (!value)
                    return 'You must enter an E-mail';

                if (/^[0-9a-z.-]+@[0-9a-z.-]+\.[a-z]+$/i.test(value))
                    return true;
                
                return 'Insert a valid e-mail'
            },
        ],
        text_rules: [
            value => {
                if (!value)       
                    return 'The text message can\'t be empty'

                if (/^\s*$/.test(value))
                    return 'The text message can\'t contain only spaces'

                return true
            }
        ],
        dialog: false,
        isFormValid: false,
        ack: 0
    }),

    methods: {
        async submit () {
            let temp = 0;
            try {
                await $fetch('/api/contactForm', {
                    method: "POST",
                    body: {
                        email: this.email,
                        message: this.text
                    }
                })
                
                temp = 1;
            }
            catch{
                temp = -1;
            }
            const self = this;
            setTimeout(function() {
                self.$nextTick(function() {
                    self.ack = temp
                    if(temp==1) {
                        self.email = null;
                        self.text = null;
                    }
                })
            }, 2000);
        }
    }
}
</script>

<style>
    .form-elem {
        font-size: 15pt;
        margin-bottom: 15px;
    }

    .form-elem input {
        font-size: 15pt;
    }

    .dialog-btn {
        font-size: 15pt;
    }
    
    .dialog-div {
        font-size: 15pt;
        padding: 10px 15px 5px 15px;
    }
</style>