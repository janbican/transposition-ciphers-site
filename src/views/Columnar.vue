<template>
    <div>
        <b-row>
            <b-col>
                <b-form-group 
                    description="2 a více malých písmen"
                    label="Klíč"
                    label-for="key"
                >
                    <b-form-input
                        id="key"
                        v-model="key"
                        @keyup="doEncrypt"
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-group 
                    description="text obsahující malá písmena"
                    label="Otevřený text"
                    label-for="plainText"
                >
                    <b-form-textarea
                        id="plainText"
                        placeholder="zadej otevřený text"
                        rows="3"
                        max-rows="6"
                        v-model="plainText"
                        @keyup="doEncrypt"
                    ></b-form-textarea>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-group 
                    description="text obsahující malá písmena"
                    label="Šifrovaný text"
                    label-for="cipherText"
                >
                    <b-form-textarea
                        id="cipherText"
                        placeholder="zadej šifrovaný text"
                        rows="3"
                        max-rows="6"
                        v-model="cipherText"
                        @keyup="doDecrypt"
                    ></b-form-textarea>
                </b-form-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import columnarCipher from '../mixins/columnarCipher'
    export default {
        name: 'columnar',
        mixins: [columnarCipher],
        data() {
            return {
                key: '',
                plainText: '',
                cipherText: ''
            }
        },
        methods: {
            doEncrypt() {
                this.cipherText = this.encrypt(this.key, this.plainText)
            },
            doDecrypt() {
                this.plainText = this.decrypt(this.key, this.cipherText)
            }
        }
    }
</script>