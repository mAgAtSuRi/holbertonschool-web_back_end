"""Lists all documents in a collection"""


def list_all(mongo_collection):
    """Lists all doc in a collection"""
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())
