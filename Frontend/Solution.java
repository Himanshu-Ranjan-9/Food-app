class Solution {
    public static int minimumLength(String s) {
        int i=0,e=s.length()-1;
        String str="";
        while(s.charAt(i)==s.charAt(e) && i<e){
            // st=i;
            str=s.substring(i,e+1);
            // System.out.println("str="+str);


            i++;
            e--;
            while(s.charAt(i-1)==s.charAt(i)){
               
                str=s.substring(i,e+1);
                // System.out.println("str="+str);

                i++;

                
            }           
            while(s.charAt(e)==s.charAt(e-1) && i!=e){
                
                
                e--;
                if(e==i) e--;
                str=s.substring(i,e+1);
                System.out.println("str="+str+"L="+str.length());

            }
            // i=st;
            System.out.println("str="+str+"L="+str.length());
            System.out.println(i+"-"+e);
        }
        str=s.substring(i,e+1);
        System.out.println("s="+s);
        System.out.println("final str="+"\n"+str);
        System.out.println("final"+"\n"+i+"-"+e);
        return str.length();
    }
    public static void main(String[] args) {
        // String s="cabaabac";//0
    //    String s="ca";//2
        // String s="aabccabba";//3
        String s="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbacccabbabccaccbacaaccacacccaccbbbacaabbccbbcbcbcacacccccccbcbbabccaacaabacbbaccccbabbcbccccaccacaccbcbbcbcccabaaaabbbbbbbbbbbbbbb";//3

        int l=minimumLength(s);
        System.out.println("L: "+ l);
    }
}