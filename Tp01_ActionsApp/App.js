import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import Entete from './src/Entete'
import Saisie from './src/Saisie'
import BoutonCreer from './src/BoutonCreer'
import ListeActions from './src/action/ListeActions'
import Menu from './src/menu/Menu'

import UneAction from './src/action/UneAction'

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {

    // état global de l'application
    // il y aura probablement d'autres informations à stocker
    state = {
        texteSaisie: '',
        actions: []
    }

    /**
     * Méthode invoquée lorsque que la saisie change.
     *
     * @param nouvelleSaisie la valeur saisie
     */
    quandLaSaisieChange(nouvelleSaisie) {
        console.log('la saisie à changée', nouvelleSaisie)
        this.setState({
            texteSaisie: nouvelleSaisie
        })
    }

    /**
     * Méthode invoquée lors du clic sur le bouton `Valider`.
     */
    validerNouvelleAction() {
        console.log('Vous avez cliqué sur Valider !')
        localCloneActions = this.state.actions
        localCloneActions.push(this.state.texteSaisie)
        this.setState({
            actions: localCloneActions,
            texteSaisie: ''
        })
        console.log('Tableau des actions saisies : ' + this.state.actions)
    }

    terminateAction(id) {
        console.log("fin de l'action : " + id)
    }

    deleteAction = (id) => {
        console.log(id)
        console.log()
        copyActions = this.state.actions
        console.log(copyActions)
        copyActions.splice(id, 1)
        this.setState({
            actions: copyActions
        })
    }

    render() {
        const {texteSaisie} = this.state

        return (
            <View style={styles.conteneur}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Entete/>
                    <Saisie texteSaisie={texteSaisie} evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}/>
                    <ListeActions actions={this.state.actions} deleteAction={this.deleteAction} terminateAction={this.terminateAction} />
                    <BoutonCreer onValider={() => this.validerNouvelleAction()}/>
                </ScrollView>
                <Menu/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
})