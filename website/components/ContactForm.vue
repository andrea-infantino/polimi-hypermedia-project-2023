<template>
    <v-form v-model="isFormValid" @submit.prevent>
        <v-text-field class="form-elem"
         v-model="email"
         :rules="email_rules"
         label="E-mail"
         variant="solo"
         autocomplete="email"
        ></v-text-field>
  
        <v-textarea class="form-elem"
         no-resize="true"
         single-line="false"
         v-model="text"
         :rules="text_rules"
         label="Text Message"
         variant="solo"
        ></v-textarea>
  
        <v-btn class="form-elem"
         :disabled="!isFormValid"
         type="submit"
        >
            submit
            <v-dialog
             v-model="dialog"
             width="auto"
             activator="parent"
            >
                <v-card>
                    <div class="dialog-div">
                    Message successfullty sent!
                    </div>
                    <v-card-actions>
                    <v-btn class="dialog-btn" color="primary" block @click="dialog = false;email = '';text = '';">Ok</v-btn>
                    </v-card-actions>
                </v-card>
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
                    return 'You must enter an E-mail.';

                if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value))
                    return true;
                
                return 'Invalid E-mail! Insert a valid one.'
            },
        ],
        text_rules: [
            value => {
                if (value)
                    return true
                
                return 'The text message can\'t be empty.'
            }
        ],
        dialog: false,
        isFormValid: false
    }),

    methods: {
        async submit (event) {
            /*
            const results = await event;
            SAVE SENT MESSAGE
            */
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