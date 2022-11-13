# python has a built in hashlib library
# https://docs.python.org/3/library/hashlib.html
import hashlib

plaintext = "hello".encode()

# instantiate sha3_256 object
hashed = hashlib.sha3_256(plaintext)

# generate human readably hash of "hello" string
hash = hashed.hexdigest()
print(hash)

# the above string is hashed, this means there is no way to "un-hash" it
# note that encrypting is different where if we encrypt something, we will have a key
# that can decipher the encryption
# as far as hashing goes, this is a one-way function that cannot (or should not)
# be deciphered