var vet = [4,2,6,2,1,10]
var l = [] 
for (let i=0; i < vet.length; i++){
    l.push(vet[i])
}
l.sort((a,b)=>a-b)
console.log(`vet: ${vet}`)
console.log(`l: ${l}`)