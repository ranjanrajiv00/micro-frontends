import React, { Component } from 'react';
import { Loading } from '../utils/PreLoading';

function FactoryComponent(moduleName, componentName) {
  class ComponentWrapper extends Component {
    state = {
      DynamicComponent: global[moduleName] && global[moduleName][componentName]
    };
    async componentDidMount() {
      if (!global[moduleName]) {
        Loading(`/${moduleName.toLowerCase()}`).then((amdModule) => {
          this.setState({ DynamicComponent: amdModule[componentName] });
        });
      }
      else {
        this.setState({ DynamicComponent: global[moduleName][componentName] });
      }
    }
    render() {
      const { DynamicComponent } = this.state;
      return DynamicComponent ? <DynamicComponent {...this.props} /> : <h1>Loading....</h1>;
    }
  }

  ComponentWrapper.displayName = moduleName;

  return ComponentWrapper;
}

export default class MicroFrontends extends Component {
  static Cart = FactoryComponent('Cart', 'CartComponent');
  static Product = FactoryComponent('Product', 'ProductComponent');
  static Header = FactoryComponent('Core', 'HeaderComponent');
  static Footer = FactoryComponent('Core', 'FooterComponent');
}