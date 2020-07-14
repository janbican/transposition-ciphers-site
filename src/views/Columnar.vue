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
                        @keyup="encrypt"
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
                        @keyup="encrypt"
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
                        @keyup="decrypt"
                    ></b-form-textarea>
                </b-form-group>
            </b-col>
        </b-row>
        {{ key }}
        {{ plainText }}
        {{ cipherText }}
    </div>
</template>

<script>
    export default {
        name: 'columnar',
        data() {
            return {
                key: '',
                plainText: '',
                cipherText: ''
            }
        }
    }
</script>