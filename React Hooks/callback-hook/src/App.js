import React from 'react'
import './App.css'
import ParentComponent from './components/ParentComponent'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
import HookCounterOne from './components/HookCounterOne'
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching'
import ComponetC from './components/ComponetC'
import ComponentF from './components/ComponentF'
import StatesEx from './components/StatesEx'
import PureComponents from './components/PureComponents'
import RegualrComponent from './components/RegualrComponent'
import RegParentComponent from './components/RegParentComponent'
import RefDemo from './components/RefDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalExample from './components/PortalExample'
import HoverCounter from './components/HoverCounter'
import ClickCounter from './components/ClickCounter'
import Count from './components/Count'
import PostList from './components/PostList'
import axios from 'axios'
import PostForm from './components/PostForm'
import ClassCounterEx from './components/ClassCounterEx'
import HookCounterEx from './components/HookCounterEx'
import HookCounterTwoSets from './components/HookCounterTwoSets'
import HookCounterThreeEx from './components/HookCounterThreeEx'
import HookArrayExample from './components/HookArrayExample'
import HookUseEffectEx from './components/HookUseEffectEx'
import ClassHookExample from './components/ClassHookExample'
import HookUseEffectExs from './components/HookUseEffectExs'
import MouseEffectHook from './components/MouseEffectHook'
import MouseEffectHookContainer from './components/MouseEffectHookContainer'
import LoginHookEx from './components/LoginHookEx'
import IntervalClassExample from './components/IntervalClassExample'
import IntervalHookEx from './components/IntervalHookEx'
import HookDataFetchEx from './components/HookDataFetchEx'
import ComponentE from './components/ComponentE'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
	return (
		<div className="App">
		<UserContext.Provider value='Malatesh K R'>
		<ComponetC/>
		</UserContext.Provider>
	

		{/*
		<HookDataFetchEx/>
		<IntervalClassExample/>
		<IntervalHookEx/>
		<LoginHookEx/>
		<MouseEffectHookContainer/>
		<MouseEffectHook/>
		<HookUseEffectExs/>
		<ClassHookExample/>	
		<HookUseEffectEx/>
		<HookArrayExample/>
		<HookCounterThreeEx/>
		<HookCounterTwoSets/>
		<ClassCounterEx/>
		<HookCounterEx/>
		<PostForm/>
		<PostList/>	
		<ClickCounter>
			{
			(counts,incrementCount)=>(<HoverCounter count={counts}
			 incrementCount={incrementCount} name={'Malatesh'}/>)
			 }
			</ClickCounter>
		<HoverCounter name='Malatesh'/>	
		<HoverCounter/>
		<PortalExample/>
		<FRParentInput/>
		<FocusInput/>
		<RegParentComponent/>
			<StatesEx/>
		<UserContext.Provider value='Malatesh'>
			<ChannelContext.Provider value='CodeEvolution'>
				<ComponetC/>
			</ChannelContext.Provider>
		</UserContext.Provider>
		*/
		}
		</div>
		
	)
}

export default App
