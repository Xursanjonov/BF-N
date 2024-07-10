class Shirft:
    def __init__(self, text, key) -> None:
        self.text = text
        self.key = key
        self.alifbe = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'
        self.lst = list(text)
        self.dc = dict()

        for i in range(len(self.alifbe)):
            if i == self.key:
                self.dc[self.alifbe[i]] = [self.lst[i]]
        return (self.dc)



text = 'hello'
key = 5

print(Shirft(text, key))