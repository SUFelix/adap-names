
import { Exception } from "../common/Exception";
import { IllegalArgumentException } from "../common/IllegalArgumentException";
import { InvalidStateException } from "../common/InvalidStateException";
import { ServiceFailureException } from "../common/ServiceFailureException";

import { Name } from "../names/Name";
import { Directory } from "./Directory";
import { RootNode } from "./RootNode";

export class Node {

    protected baseName: string = "";
    protected parentNode: Directory;

    constructor(bn: string, pn: Directory) {
        this.doSetBaseName(bn);
        this.parentNode = pn; // why oh why do I have to set this
        this.initialize(pn);
    }

    protected initialize(pn: Directory): void {
        this.parentNode = pn;
        this.parentNode.addChildNode(this);
    }

    public move(to: Directory): void {
        this.parentNode.removeChildNode(this);
        to.addChildNode(this);
        this.parentNode = to;
    }

    public getFullName(): Name {
        const result: Name = this.parentNode.getFullName();
        result.append(this.getBaseName());
        return result;
    }

    public getBaseName(): string {
        return this.doGetBaseName();
    }

    protected doGetBaseName(): string {
        return this.baseName;
    }

    public rename(bn: string): void {
        this.doSetBaseName(bn);
    }

    protected doSetBaseName(bn: string): void {
        this.baseName = bn;
    }

    public getParentNode(): Directory {
        return this.parentNode;
    }

    /**
     * Returns all nodes in the tree that match bn
     * @param bn basename of node being searched for
     */
    public findNodes(bn: string): Set<Node> {
        try{
        let currentNode: Node = this!;
        while(!(currentNode.getParentNode() instanceof RootNode)){
            currentNode = currentNode.getParentNode();
        }
        currentNode = currentNode.getParentNode();

        let result: Set<Node> = new Set();
        
        findNodesFromStartnode(currentNode);
        
        return result;
    
        function findNodesFromStartnode(currentNode: Node) {

            //currentNode.assertClassInvariants();

            if (currentNode instanceof Directory) {
                for (const child of currentNode.getChildNodes()) {
                    if (child.getBaseName() === bn) {
                        result.add(child); 
                    }
                    findNodesFromStartnode(child);
                }
            }
            else if (currentNode instanceof File && currentNode.getBaseName() === bn) {
                result.add(currentNode); 
            }
        }}
        catch(exeption:any){
            throw new ServiceFailureException("service failed", exeption);
        }
    }
    

   /* protected assertClassInvariants(): void {
        const bn: string = this.doGetBaseName();
        this.assertIsValidBaseName(bn, ExceptionType.CLASS_INVARIANT);
    }

    protected assertIsValidBaseName(bn: string, et: ExceptionType): void {
        const condition: boolean = (bn != "");
        AssertionDispatcher.dispatch(et, condition, "invalid base name");
    }*/
}
