class Pokemon { 
	constructor(name,level) { 
		this.name = name; 
		this.level = level; 
	} 
	show() { 
		console.log(this.name+"\n"+this.level); 
	} 
	valueOf() {
		return this.level.valueOf();
	}
} 

class PokemonList { 
	constructor(...pok) { 
		this.myList = pok.map(i => i); 
	} 
	push (...pokemons) { 
		var x = pokemons.map(i => i);
		this.myList=this.myList.concat(x);
	} 
	shift() { 
		var x = this.myList.shift(); 
		return x; 
	} 
	pop () { 
		return this.myList.pop(); 
	} 
	add(name,level){ 
		var newPokemon = new Pokemon(name,level); 
		this.myList.push(newPokemon); 
	}

	split (string,s,count) {//добавим строку разбитую по s  к списку 
		var arr = string.split(s);
		if((count===undefined)||(count>arr.length)){
			var maxCount = arr.length-arr.length%2;
		}
		else {
			maxCount = count-count%2;
		}		
		for(var i=0; i<maxCount;i=i+2){
			this.add(String(arr[i]),Number(arr[i+1]));
		}		
	} 

	length(){
		var num =this.myList.length;
		return num;
	}

	join (s) { 
		var string ='';
		for(var i=0; i<this.length();i++){
			string = string+s+this.myList[i].name+s+this.myList[i].level;
		}
		return string;
	}
	delete (index){
		delete this.myList[index];
	}

	splice(pos1,pos2,...newPokemons) {
		return this.myList.splice(pos1,pos2,...newPokemons);
	}

	slice(begin,end) { 
		this.myList=this.myList.slice(begin,end);
	} 

	sort() { // сортировка покемонов по level

		if(this.myList.length>1){			
			for(var i=0;i<this.myList.length-1;i++){
				for(var j=0;j<this.myList.length-1;j++){
					if(this.myList[j].level>this.myList[j+1].level){
						var temp = this.myList[j].level;
						this.myList[j].level = this.myList[j+1].level;
						this.myList[j+1].level = temp;
					}
				}
			}
		}	

	}

	reverse() {
		this.myList.reverse();
	}
	indexOf(Pokemon) {
		var x = this.myList.indexOf(Pokemon);
		return x;
	}

	lastIndexOf(Pokemon) {
		var x = this.myList.indexOf(Pokemon);
		return x;
	}
	
	concat(...value) {
		var x = value.map(i => i.myList);
		var newList = this;
		for(var i=0; i<x.length;i++){
			newList.myList=newList.myList.concat(x[i]);
		}
		return	newList;
	}
	show(){
		console.log(this.myList.length+" покемонов \n");
		for (var i = 0; i < this.myList.length; i++) {
			console.log(i+1+') '+this.myList[i].name+" Уровень: "+this.myList[i].level+"\n");
		} 
		console.log("\n\n\n"); 
	} 

	maxSimple(){
		var temp = this;
		
		temp.sort();
		temp.reverse();

		return(temp.myList[0]);
		

	}
	max(){//через valueOf
		var max = this.myList[0];
		for (var i = 1; i < this.myList.length; i++) {
			if((max)<this.myList[i].valueOf[i]){
				max= this.myList[i].valueOf[i];
			}
		}
		return max;
	}
	
} 

//var Popka = new Pokemon('KAtyalala', 80);    
//Popka.show();

/*var x = new Pokemon("qwe",90);
var y = new Pokemon("alalawe",100);
var z = new Pokemon("rqwe",9);*/

/*var myList1 = new PokemonList(Popka,x,y,z);
var myList2 = new PokemonList(Popka,x,y,z);*/
//var feokla = myList2.concat(myList1);
//console.log(feokla);

//myList2.split('baby,90,error,80,asda',' ',5);
/*var Popka1 = new Pokemon('KAtya2', 80);  

myList2.join('#');
myList2.show();*/
//var x = myList2.splice(1,1,Popka1,Popka1);
//console.log("-------------------");
//myList2.show();
//console.log(x);
//myList2.indexOf(Popka1);

//myList1.show();
//var we = myList1.myList;
//console.log(we);
////myList1.myList.push (Popka);
const pokenons = [
	{'name':'Xw','level':34}, 
	{'name':'Iljd','level':15},
	{'name':'VAsa1','level':47}, 
	{'name':'Tutut','level':32}, 
	{'name':'Pikachu','level':100}, 
	{'name':'ytd','level':1},
	{'name':'VAsa2','level':0}, 
	{'name':'Pchu','level':2}, 
	{'name':'Zumba','level':3}, 
	{'name':'Lolka','level':13}, 
	{'name':'Slolka','level':24}, 
	{'name':'ol','level':23}, 
	{'name':'Monster','level':74}, 
	{'name':'Demon','level':53}, 
	{'name':'Turist','level':56}, 
	{'name':'Zmei','level':98},  
	{'name':'Faust','level':56}, 
	{'name':'Mifha','level':30}, 
	{'name':'Feokla','level':2}];
const objects = pokenons.map(
obj => new Pokemon(obj.name, obj.level)
);
const lost = new PokemonList(...objects.slice(0, 10));
const found = new PokemonList(...objects.slice(10));
lost.add("DObavlen_V_LOST",8);

var x = new Pokemon("qwe",90);
var y = new Pokemon("alalawe",100);
var z = new Pokemon("rqwe",9);
//found.push(x,y,z);

//lost.show();
//found.show();
//found.push(lost.pop())


//found.show();

//found.show();
//console.log(found.max());
//found.show();

//var t = found.valueOf();
//console.log(t);

//var t = lost.concat(found,found);
//console.log(x.valueOf());
//lost.show();

console.log(found.maxSimple());
console.log(found.max());